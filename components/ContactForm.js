"use client";

import { useState } from "react";
import Field from "@/components/Field";
import { btnPrimary } from "@/lib/styles";
import { focusFirst, isEmail } from "@/lib/validate";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", organisation: "", message: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function update(key, value) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim()) next.email = "Enter your email address.";
    else if (!isEmail(values.email)) next.email = "Enter an email address in the form name@company.com.";
    if (!values.message.trim()) next.message = "Enter a message.";
    else if (values.message.trim().length < 12) next.message = "Write a little more so the message is clear.";
    setErrors(next);
    if (Object.keys(next).length) {
      focusFirst(next, ["name", "email", "message"]);
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div role="status" className="border border-line bg-white p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Message kept in the browser.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          This demonstration does not send email. Nothing was delivered to hello@halden.example.
        </p>
        <button type="button" className={`${btnPrimary} mt-6`} onClick={() => setDone(false)}>
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5 border border-line bg-white p-5 sm:p-8">
      <Field id="name" label="Name" autoComplete="name" value={values.name} error={errors.name} onChange={(event) => update("name", event.target.value)} />
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
        id="organisation"
        label="Organisation"
        autoComplete="organization"
        value={values.organisation}
        hint="Optional."
        onChange={(event) => update("organisation", event.target.value)}
      />
      <Field
        as="textarea"
        id="message"
        label="Message"
        value={values.message}
        error={errors.message}
        onChange={(event) => update("message", event.target.value)}
      />
      <button type="submit" className={btnPrimary}>
        Send message
      </button>
    </form>
  );
}
