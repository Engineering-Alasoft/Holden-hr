import CategoryDirectory from "@/components/CategoryDirectory";
import Container from "@/components/Container";
import DiscoverBand from "@/components/DiscoverBand";
import EmployerBenefits from "@/components/EmployerBenefits";
import FaqList from "@/components/FaqList";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SectionIntro from "@/components/SectionIntro";
import StatsBand from "@/components/StatsBand";
import TalentBrowser from "@/components/TalentBrowser";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <CategoryDirectory />
      <section id="candidates" className="bg-white py-16 md:py-24">
        <Container>
          <SectionIntro eyebrow="Sample profiles" title="Featured Candidates">
            These professionals are fictional. Filters search the sample registry by location, experience, skills, category and availability.
          </SectionIntro>
          <div className="mt-10">
            <TalentBrowser mode="featured" />
          </div>
        </Container>
      </section>
      <HowItWorks />
      <EmployerBenefits />
      <DiscoverBand />
      <Testimonials />
      <section id="faq" className="bg-canvas py-16 md:py-24">
        <Container>
          <SectionIntro eyebrow="Practical questions" title="Questions companies and candidates ask">
            Answers describe how Halden is intended to work, and where this prototype stops.
          </SectionIntro>
          <div className="mt-8">
            <FaqList />
          </div>
        </Container>
      </section>
    </>
  );
}
