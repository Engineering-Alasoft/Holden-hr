"use client";

import { useState } from "react";
import Link from "next/link";
import Field from "@/components/Field";
import { categories } from "@/lib/data";
import { btnPrimary } from "@/lib/styles";
import { focusFirst, isEmail } from "@/lib/validate";

const visibilityOptions = [
  { value: "listed", label: "Listed", note: "Companies can find the profile in search." },
  { value: "limited", label: "Limited", note: "The CV stays closed until you allow an employer." },
  { value: "hidden", label: "Hidden", note: "The profile is left out of search." },
];

export default function UploadForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    category: "",
    visibility: "listed",
    acknowledge: false,
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);

  function update(key, value) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onFile(event) {
    const next = event.target.files?.[0] || null;
    setFile(next);
  }

  function onSubmit(event) {
    event.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = "Enter your full name.";
    if (!values.email.trim()) next.email = "Enter your email address.";
    else if (!isEmail(values.email)) next.email = "Enter an email address in the form name@company.com.";
    if (!values.category) next.category = "Choose a category.";
    if (!file) next.file = "Choose a CV file to continue.";
    else {
      const allowed = ["pdf", "doc", "docx"];
      const extension = file.name.split(".").pop()?.toLowerCase();
      if (!allowed.includes(extension)) next.file = "Choose a PDF or Word file.";
      else if (file.size > 5 * 1024 * 1024) next.file = "Choose a file smaller than 5 MB.";
    }
    if (!values.acknowledge) next.acknowledge = "Confirm that the file should stay on this device.";
    setErrors(next);
    if (Object.keys(next).length) {
      focusFirst(next, ["name", "email", "category", "file", "acknowledge"]);
      return;
    }
    setDone({
      name: file.name,
      size: Math.max(1, Math.round(file.size / 1024)),
      visibility: values.visibility,
    });
  }

  if (done) {
    const label = visibilityOptions.find((item) => item.value === done.visibility)?.label;
    return (
      <div role="status" className="border border-line bg-white p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">File noted on this device only.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {done.name} ({done.size} KB) was not uploaded. Visibility was set to {label} in the form and then discarded.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/find-talent" className={btnPrimary}>
            Explore Candidates
          </Link>
          <button type="button" className="text-sm font-medium text-action" onClick={() => setDone(null)}>
            Choose another file
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5 border border-line bg-white p-5 sm:p-8">
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
      <Field
        as="select"
        id="category"
        label="Job category"
        value={values.category}
        error={errors.category}
        onChange={(event) => update("category", event.target.value)}
      >
        <option value="">Choose a category</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.name}>
            {category.name}
          </option>
        ))}
      </Field>
      <fieldset>
        <legend className="text-sm font-medium text-ink">Who can see the profile</legend>
        <div className="mt-3 space-y-3">
          {visibilityOptions.map((option) => (
            <label key={option.value} className="flex items-start gap-3 text-sm">
              <input
                type="radio"
                name="visibility"
                value={option.value}
                checked={values.visibility === option.value}
                onChange={() => update("visibility", option.value)}
                className="mt-1"
              />
              <span>
                <span className="block font-medium text-ink">{option.label}</span>
                <span className="block text-muted">{option.note}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="file" className="block text-sm font-medium text-ink">
          CV file
        </label>
        <p id="file-hint" className="mt-1 text-xs leading-relaxed text-muted">
          PDF, DOC or DOCX, up to 5 MB. The file is not uploaded.
        </p>
        <input
          id="file"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={onFile}
          aria-invalid={errors.file ? "true" : "false"}
          aria-describedby={errors.file ? "file-hint file-error" : "file-hint"}
          className="mt-2 block w-full text-sm text-ink file:mr-4 file:border-0 file:bg-primary file:px-3 file:py-2 file:text-sm file:font-medium file:text-ink"
        />
        <p className="mt-2 text-sm text-muted">{file ? `${file.name}` : "No file chosen"}</p>
        {errors.file ? (
          <p id="file-error" className="mt-2 text-sm text-[#9B2C2C]">
            {errors.file}
          </p>
        ) : null}
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm text-ink">
          <input
            id="acknowledge"
            type="checkbox"
            checked={values.acknowledge}
            onChange={(event) => update("acknowledge", event.target.checked)}
            className="mt-0.5"
          />
          <span>I understand this file stays in the browser and should not be a real CV.</span>
        </label>
        {errors.acknowledge ? (
          <p id="acknowledge-error" className="mt-2 text-sm text-[#9B2C2C]">
            {errors.acknowledge}
          </p>
        ) : null}
      </div>
      <button type="submit" className={btnPrimary}>
        Upload Your CV
      </button>
    </form>
  );
}
