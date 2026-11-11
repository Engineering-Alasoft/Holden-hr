import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import TalentBrowser from "@/components/TalentBrowser";

export const metadata = {
  title: "Find Talent",
  description: "Search fictional candidate profiles in the Halden demonstration.",
};

function text(value) {
  return typeof value === "string" ? value : "";
}

export default async function FindTalentPage({ searchParams }) {
  const params = await searchParams;

  return (
    <>
      <PageHeader eyebrow="Directory" title="Find Talent">
        Search fictional profiles prepared for this prototype. Filters apply to the sample registry on this device.
      </PageHeader>
      <Container className="py-10 md:py-14">
        <TalentBrowser
          mode="directory"
          initialQuery={text(params.q)}
          initialCategory={text(params.category)}
          initialLocation={text(params.location)}
          initialSkill={text(params.skill)}
          initialExperience={text(params.experience)}
          initialAvailability={text(params.availability)}
        />
      </Container>
    </>
  );
}
