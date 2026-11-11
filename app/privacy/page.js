import Container from "@/components/Container";
import { privacySections } from "@/lib/content";

export const metadata = {
  title: "Privacy Policy",
  description: "Placeholder privacy note for the Halden demonstration.",
};

export default function PrivacyPage() {
  return (
    <article className="bg-white">
      <Container className="py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-action">Placeholder</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          This text is a sample for the prototype. It is not a legal policy you can rely on.
        </p>
        {privacySections.map((section) => (
          <section key={section.heading} className="mt-10 max-w-3xl">
            <h2 className="text-xl font-semibold text-ink">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </Container>
    </article>
  );
}
