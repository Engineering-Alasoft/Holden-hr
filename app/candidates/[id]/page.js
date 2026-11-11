import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Portrait from "@/components/Portrait";
import ProfileActions from "@/components/ProfileActions";
import { candidates, getCandidate, relatedCandidates, yearsLabel } from "@/lib/data";

export function generateStaticParams() {
  return candidates.map((person) => ({ id: person.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const person = getCandidate(id);
  if (!person) return { title: "Profile" };
  return {
    title: person.name,
    description: `${person.title} in ${person.city}. Sample profile in the Halden demonstration.`,
  };
}

export default async function CandidatePage({ params }) {
  const { id } = await params;
  const person = getCandidate(id);
  if (!person) notFound();
  const related = relatedCandidates(person);
  const facts = [
    ["Experience", yearsLabel(person.years)],
    ["Availability", person.availability],
    ["Category", person.category],
    ["Location", `${person.city}, ${person.country}`],
    ["Education", person.educationLevel],
    ["Stated expectation", person.salary],
  ];

  return (
    <article className="bg-white">
      <Container className="py-10 md:py-14">
        <p className="text-sm text-muted">
          <Link href="/find-talent" className="font-medium text-action">
            Find Talent
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href={`/find-talent?category=${encodeURIComponent(person.category)}`} className="font-medium text-action">
            {person.category}
          </Link>
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Portrait person={person} className="h-52 w-40" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sample profile</p>
              <ProfileActions person={person} />
            </div>
          </div>
          <div className="lg:col-span-8">
            <h1 className="text-4xl font-semibold tracking-tight text-ink">{person.name}</h1>
            <p className="mt-2 text-xl text-ink">{person.title}</p>
            <p className="mt-2 text-muted">
              {person.city}, {person.country}
            </p>
            <p className="mt-6 border border-line bg-primary px-4 py-3 text-sm leading-relaxed text-ink">
              This is a fictional profile for the prototype. The CV download is generated in your browser from these sample details.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
              {facts.map(([label, value]) => (
                <div key={label} className="bg-white p-4">
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-10 text-xl font-semibold text-ink">About</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{person.summary}</p>
            <h2 className="mt-10 text-xl font-semibold text-ink">Skills</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {person.skills.map((skill) => (
                <li key={skill}>
                  <Link
                    href={`/find-talent?skill=${encodeURIComponent(skill)}`}
                    className="inline-block border border-line px-2 py-1.5 text-xs text-ink hover:border-action hover:text-action"
                  >
                    {skill}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-xl font-semibold text-ink">Experience</h2>
            <ol className="mt-4 border-l border-line">
              {person.history.map((job) => (
                <li key={`${job.role}-${job.employer}`} className="relative pb-8 pl-6 last:pb-0">
                  <span className="absolute -left-1 top-1.5 h-2 w-2 bg-accent" aria-hidden="true" />
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">{job.period}</p>
                  <h3 className="mt-1 font-semibold text-ink">{job.role}</h3>
                  <p className="text-sm text-action">{job.employer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{job.summary}</p>
                </li>
              ))}
            </ol>
            <h2 className="mt-10 text-xl font-semibold text-ink">Education</h2>
            <ul className="mt-4 space-y-4">
              {person.education.map((item) => (
                <li key={`${item.qualification}-${item.year}`}>
                  <p className="font-medium text-ink">{item.qualification}</p>
                  <p className="text-sm text-muted">
                    {item.institution}, {item.year}
                  </p>
                </li>
              ))}
            </ul>
            {related.length ? (
              <div className="mt-12 border-t border-line pt-8">
                <h2 className="text-xl font-semibold text-ink">Others in {person.category}</h2>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/candidates/${item.id}`}
                        className="flex flex-col gap-1 py-3 hover:text-action sm:flex-row sm:items-baseline sm:justify-between"
                      >
                        <span className="font-medium text-ink">{item.name}</span>
                        <span className="text-sm text-muted">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </article>
  );
}
