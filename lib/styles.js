const base = "inline-flex items-center justify-center gap-2 rounded-sm text-sm font-medium transition-colors";
const pad = "px-5 py-3";
const padSm = "px-3 py-2";

export const btnPrimary = `${base} ${pad} bg-action text-white hover:bg-action-dark`;
export const btnPrimarySm = `${base} ${padSm} bg-action text-white hover:bg-action-dark`;
export const btnSecondary = `${base} ${pad} border border-line bg-white text-ink hover:border-action hover:text-action`;
export const btnSecondarySm = `${base} ${padSm} border border-line bg-white text-ink hover:border-action hover:text-action`;
export const btnLight = `${base} ${pad} bg-white text-ink hover:bg-primary`;

export const fieldClass =
  "w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted";
