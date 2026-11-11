"use client";

import { useState } from "react";
import Link from "next/link";
import Field from "@/components/Field";
import { btnPrimary } from "@/lib/styles";
import { focusFirst, isEmail } from "@/lib/validate";

const empty = {
  name: "",
  email: "",
  password: "",
  confirm: "",
  company: "",
  title: "",
  acknowledge: false,
};

export default function RegisterForm({ initialRole = "candidate" }) {
  const [role, setRole] = useState(initialRole === "employer" ? "employer" : "candidate");
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function update(key, value) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = "Enter your full name.";
    if (!values.email.trim()) next.email = "Enter your email address.";
    else if (!isEmail(values.email)) next.email = "Enter an email address in the form name@company.com.";
    if (!values.password) next.password = "Enter a password.";
    else if (values.password.length < 8) next.password = "Use at least 8 characters.";
    if (values.confirm !== values.password) next.confirm = "Passwords do not match.";
    if (role === "employer" && !values.company.trim()) next.company = "Enter the company name.";
    if (role === "candidate" && !values.title.trim()) next.title = "Enter your current job title.";
    if (!values.acknowledge) next.acknowledge = "Confirm that you understand this is a demonstration.";
    setErrors(next);
    const order = ["name", "email", "title", "company", "password", "confirm", "acknowledge"];
    if (Object.keys(next).length) {
      focusFirst(next, order);
      return;
    }
    setValues((current) => ({ ...current, password: "", confirm: "" }));
    setDone(true);
  }

  if (done) {
    const employer = role === "employer";
    return (
      <div role="status">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Details checked, nothing stored.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {employer
            ? "A company account was not created. You can still browse the sample registry."
            : "A candidate profile was not created. You can try the upload screen next, or browse the sample people."}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={employer ? "/find-talent" : "/upload"} className={btnPrimary}>
            {employer ? "Explore Available Talent" : "Upload Your CV"}
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
      <fieldset>
        <legend className="text-sm font-medium text-ink">Register as</legend>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {[
            ["candidate", "Job seeker", "Publish a profile"],
            ["employer", "Employer", "Search the registry"],
          ].map(([value, label, note]) => (
            <label
              key={value}
              className={`cursor-pointer border px-3 py-3 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-accent ${
                role === value ? "border-accent bg-primary" : "border-line"
              }`}
            >
              <input
                type="radio"
                name="role"
                value={value}
                checked={role === value}
                onChange={() => setRole(value)}
                className="sr-only"
              />
              <span className="block text-sm font-medium text-ink">{label}</span>
              <span className="mt-1 block text-xs text-muted">{note}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <Field id="name" label="Full name" autoComplete="name" value={values.name} error={errors.name} onChange={(event) => update("name", event.target.value)} />
      <Field
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        value={values.email}
        error={errors.email}
        onChange={(event) => update("email", event.target.value)}
      />
      {role === "candidate" ? (
        <Field
          id="title"
          label="Current job title"
          value={values.title}
          error={errors.title}
          onChange={(event) => update("title", event.target.value)}
        />
      ) : (
        <Field
          id="company"
          label="Company name"
          autoComplete="organization"
          value={values.company}
          error={errors.company}
          onChange={(event) => update("company", event.target.value)}
        />
      )}
      <Field
        id="password"
        label="Password"
        type="password"
        autoComplete="new-password"
        value={values.password}
        error={errors.password}
        onChange={(event) => update("password", event.target.value)}
      />
      <Field
        id="confirm"
        label="Confirm password"
        type="password"
        autoComplete="new-password"
        value={values.confirm}
        error={errors.confirm}
        onChange={(event) => update("confirm", event.target.value)}
      />
      <div>
        <label className="flex items-start gap-3 text-sm text-ink">
          <input
            id="acknowledge"
            type="checkbox"
            checked={values.acknowledge}
            onChange={(event) => update("acknowledge", event.target.checked)}
            className="mt-0.5"
            aria-describedby={errors.acknowledge ? "acknowledge-error" : undefined}
          />
          <span>I understand this is a demonstration and no account will be created.</span>
        </label>
        {errors.acknowledge ? (
          <p id="acknowledge-error" className="mt-2 text-sm text-[#9B2C2C]">
            {errors.acknowledge}
          </p>
        ) : null}
      </div>
      <button type="submit" className={btnPrimary}>
        Register
      </button>
      <p className="text-sm text-muted">
        Already registered in the demo?{" "}
        <Link href="/login" className="font-medium text-action">
          Login
        </Link>
      </p>
    </form>
  );
}
