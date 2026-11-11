import Link from "next/link";
import Container from "@/components/Container";
import EmployerBenefits from "@/components/EmployerBenefits";
import PageHeader from "@/components/PageHeader";
import { employerSteps } from "@/lib/content";
import { btnPrimary } from "@/lib/styles";

export const metadata = {
  title: "For Employers",
  description: "How companies search the Halden candidate registry and download sample CVs.",
};

export default function ForEmployersPage() {
  return (
    <>
      <PageHeader eyebrow="Companies" title="For Employers">
        Search people who have already written down their experience. Compare a few, save the ones you want to revisit, and download a sample CV.
      </PageHeader>
      <section className="bg-white py-14 md:py-20">
        <Container>
          <ol className="grid gap-8 md:grid-cols-3">
            {employerSteps.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-5">
                <p className="text-sm font-semibold text-action">{index + 1}</p>
                <h2 className="mt-3 text-lg font-semibold text-ink">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <Link href="/find-talent" className={`${btnPrimary} mt-10`}>
            Explore Available Talent
          </Link>
        </Container>
      </section>
      <section className="border-t border-line bg-canvas py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">What the registry is for</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A first review should not depend on files scattered across inboxes. These are the tasks the employer side of Halden is built around.
          </p>
          <div className="mt-10">
            <EmployerBenefits heading={false} />
          </div>
        </Container>
      </section>
    </>
  );
}
