import Logo from "@/components/Logo";

export default function AuthShell({ title, lede, aside, children }) {
  return (
    <div className="grid lg:min-h-[720px] lg:grid-cols-2">
      <aside className="hidden flex-col justify-between bg-ink px-12 py-14 text-white lg:flex">
        <Logo tone="light" />
        <div>
          <p className="max-w-md text-4xl font-semibold tracking-tight">{aside}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#D5DEE8]">{lede}</p>
        </div>
        <p className="text-xs text-[#D5DEE8]">Demonstration only. Halden does not store these details.</p>
      </aside>
      <div className="bg-white px-5 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-md">
          <h1 className="text-3xl font-semibold tracking-tight text-ink">{title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted lg:hidden">{lede}</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
