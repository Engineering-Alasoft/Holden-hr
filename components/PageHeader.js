import Container from "@/components/Container";

export default function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="border-b border-line bg-white">
      <Container className="py-12 md:py-16">
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.16em] text-action">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h1>
        {children ? <div className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{children}</div> : null}
      </Container>
    </header>
  );
}
