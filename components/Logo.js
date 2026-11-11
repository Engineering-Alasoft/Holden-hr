export default function Logo({ tone = "dark" }) {
  const light = tone === "light";
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" fill={light ? "#3986D7" : "#172B46"} />
        <path fill="#F7FAFE" d="M9 8h3.2v6.2H19.8V8H23v16h-3.2v-6.6H12.2V24H9V8z" />
      </svg>
      <span className={`text-[1.05rem] font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>Halden</span>
    </span>
  );
}
