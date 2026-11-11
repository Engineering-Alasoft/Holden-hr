"use client";

import { useState } from "react";
import Link from "next/link";
import Field from "@/components/Field";
import { btnPrimary } from "@/lib/styles";
import { focusFirst, isEmail } from "@/lib/validate";

export default function LoginForm() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function update(key, value) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const next = {};
    if (!values.email.trim()) next.email = "Enter your email address.";
    else if (!isEmail(values.email)) next.email = "Enter an email address in the form name@company.com.";
    if (!values.password) next.password = "Enter a password.";
    else if (values.password.length < 8) next.password = "Use at least 8 characters.";
    setErrors(next);
    if (Object.keys(next).length) {
      focusFirst(next, ["email", "password"]);
      return;
    }
    setValues((current) => ({ ...current, password: "" }));
    setDone(true);
  }

  if (done) {
    return (
      <div role="status">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">The form is complete.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          This demonstration does not sign you in. Nothing was sent to a server.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/find-talent" className={btnPrimary}>
            Explore Candidates
          </Link>
          <button type="button" className="text-sm font-medium text-action" onClick={() => setDone(false)}>
            Back to the form
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <Field
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        value={values.email}
        error={errors.email}
        onChange={(event) => update("email", event.target.value)}
      />
      <Field
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={values.password}
        error={errors.password}
        hint="Any password of 8 or more characters will pass. It is not checked against an account."
        onChange={(event) => update("password", event.target.value)}
      />
      <button type="submit" className={btnPrimary}>
        Login
      </button>
      <p className="text-sm text-muted">
        No account yet?{" "}
        <Link href="/register" className="font-medium text-action">
          Register
        </Link>
      </p>
    </form>
  );
}
