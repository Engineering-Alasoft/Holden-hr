import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { seekerSteps } from "@/lib/content";
import { btnPrimary, btnSecondary } from "@/lib/styles";

const profileParts = [
  ["Work", "A title, a category and a short summary in your own words."],
  ["History", "Roles, employers and the education you want a company to see."],
  ["Skills", "The tools and methods you use, so search can find them."],
  ["CV", "A file companies can download while your profile is listed."],
];

export const metadata = {
  title: "For Job Seekers",
  description: "How professionals create a Halden profile and become discoverable to companies.",
};

export default function ForJobSeekersPage() {
  return (
    <>
      <PageHeader eyebrow="Candidates" title="For Job Seekers">
        Put your experience where a company can read it without asking you to send the same CV again.
      </PageHeader>
      <section className="bg-white py-14 md:py-20">
        <Container>
          <ol className="grid gap-8 md:grid-cols-3">
            {seekerSteps.map((step, index) => (
              <li key={step.title} className="border-t border-accent pt-5">
                <p className="text-sm font-semibold text-action">{index + 1}</p>
                <h2 className="mt-3 text-lg font-semibold text-ink">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/register?role=candidate" className={btnPrimary}>
              Create Your Free Profile
            </Link>
            <Link href="/upload" className={btnSecondary}>
              Upload Your CV
            </Link>
          </div>
        </Container>
      </section>
      <section className="border-t border-line bg-canvas py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">What a profile holds</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            The sample profiles in the directory show the shape. A profile you start in this prototype is not added to that list.
          </p>
          <dl className="mt-10 grid gap-px bg-line sm:grid-cols-2">
            {profileParts.map(([title, body]) => (
              <div key={title} className="bg-white p-6">
                <dt className="font-semibold text-ink">{title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
