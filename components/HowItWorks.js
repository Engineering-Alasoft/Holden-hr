import Link from "next/link";
import Container from "@/components/Container";
import SectionIntro from "@/components/SectionIntro";
import { employerSteps, seekerSteps } from "@/lib/content";
import { btnLight, btnPrimary } from "@/lib/styles";

function Pathway({ dark, kicker, title, steps, action, heading }) {
  const TitleTag = heading ? "h3" : "h2";
  const StepTag = heading ? "h4" : "h3";
  return (
    <article className={dark ? "bg-ink p-6 text-white md:p-8" : "border border-line bg-white p-6 md:p-8"}>
      <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-[#9EBFDF]" : "text-action"}`}>{kicker}</p>
      <TitleTag className="mt-3 text-2xl font-semibold tracking-tight">{title}</TitleTag>
      <ol className="mt-8 space-y-6">
        {steps.map((step, index) => (
          <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
            <span className={`font-semibold ${dark ? "text-[#9EBFDF]" : "text-action"}`}>{index + 1}</span>
            <div>
              <StepTag className="font-semibold">{step.title}</StepTag>
              <p className={`mt-1 text-sm leading-relaxed ${dark ? "text-[#D5DEE8]" : "text-muted"}`}>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link href={action.href} className={`mt-8 ${dark ? btnLight : btnPrimary}`}>
        {action.label}
      </Link>
    </article>
  );
}

export default function HowItWorks({ heading = true }) {
  const body = (
    <div className="grid gap-6 lg:grid-cols-2">
      <Pathway
        heading={heading}
        kicker="Candidates"
        title="For Job Seekers"
        steps={seekerSteps}
        action={{ href: "/register?role=candidate", label: "Create Your Free Profile" }}
      />
      <Pathway
        heading={heading}
        dark
        kicker="Companies"
        title="For Employers"
        steps={employerSteps}
        action={{ href: "/find-talent", label: "Explore Available Talent" }}
      />
    </div>
  );

  if (!heading) return body;

  return (
    <section id="how-it-works" className="bg-canvas py-16 md:py-24">
      <Container>
        <SectionIntro eyebrow="Two routes" title="How the Platform Works">
          Job seekers publish a profile. Companies search it. Both use the same registry, with a different first step.
        </SectionIntro>
        <div className="mt-12">{body}</div>
      </Container>
    </section>
  );
}
