import Container from "@/components/Container";
import HowItWorks from "@/components/HowItWorks";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "How It Works",
  description: "How candidates publish a profile and how companies search the Halden registry.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader eyebrow="The registry" title="How It Works">
        One directory, two ways in. Candidates publish their experience. Companies search it and download a CV when a profile is listed.
      </PageHeader>
      <section className="bg-canvas py-14 md:py-20">
        <Container>
          <HowItWorks heading={false} />
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2">
            <div className="bg-white p-6">
              <h2 className="text-lg font-semibold text-ink">Works in the browser</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Search, filters, profile pages, sample CV downloads, the shortlist and form checks.
              </p>
            </div>
            <div className="bg-white p-6">
              <h2 className="text-lg font-semibold text-ink">Not connected yet</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Accounts, saved registrations, private CV storage and employer permissions. The screens are ready for that work later.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
