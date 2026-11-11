import { ChevronDown } from "lucide-react";
import { fieldClass } from "@/lib/styles";

export default function Field({ as = "input", id, label, error, hint, children, className = "", ...props }) {
  const described = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") || undefined;
  const invalid = error ? "true" : "false";
  const controlClass = `${fieldClass} ${error ? "border-[#9B2C2C]" : ""} ${className}`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-xs leading-relaxed text-muted">
          {hint}
        </p>
      ) : null}
      {as === "select" ? (
        <div className="relative mt-2">
          <select
            id={id}
            aria-invalid={invalid}
            aria-describedby={described}
            className={`${controlClass} appearance-none pr-10`}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
        </div>
      ) : null}
      {as === "textarea" ? (
        <textarea
          id={id}
          aria-invalid={invalid}
          aria-describedby={described}
          className={`${controlClass} mt-2 min-h-32 resize-y`}
          {...props}
        />
      ) : null}
      {as === "input" ? (
        <input id={id} aria-invalid={invalid} aria-describedby={described} className={`${controlClass} mt-2`} {...props} />
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#9B2C2C]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
