import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Contact",
  description: "Placeholder contact form for the Halden demonstration.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Contact">
        The address and inbox below are placeholders. The form does not send a message.
      </PageHeader>
      <section className="bg-canvas py-12 md:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="text-sm leading-relaxed text-muted">
            <p className="font-semibold text-ink">Halden</p>
            <p className="mt-3">18 Clerkenwell Green</p>
            <p>London EC1R 0DP</p>
            <p className="mt-4">
              <a className="font-medium text-action" href="mailto:hello@halden.example">
                hello@halden.example
              </a>
            </p>
            <p className="mt-1">
              <a className="font-medium text-action" href="tel:+442079460991">
                +44 20 7946 0991
              </a>
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
