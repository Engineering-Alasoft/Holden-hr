import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ShortlistView from "@/components/ShortlistView";

export const metadata = {
  title: "Shortlist",
  description: "Candidates saved in this browser during the Halden demonstration.",
};

export default function ShortlistPage() {
  return (
    <>
      <PageHeader eyebrow="Employers" title="Saved candidates">
        Profiles you save stay in this browser. They are not shared with a team and they disappear if you clear site data.
      </PageHeader>
      <section className="bg-canvas py-10 md:py-14">
        <Container>
          <ShortlistView />
        </Container>
      </section>
    </>
  );
}
