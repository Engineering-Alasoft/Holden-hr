export default function SectionIntro({ eyebrow, title, children, titleId }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.16em] text-action">{eyebrow}</p> : null}
      <h2 id={titleId} className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] md:leading-tight">
        {title}
      </h2>
      {children ? <p className="mt-4 text-base leading-relaxed text-muted">{children}</p> : null}
    </div>
  );
}
