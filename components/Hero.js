import Link from "next/link";
import Container from "@/components/Container";
import Portrait from "@/components/Portrait";
import { getCandidate } from "@/lib/data";
import { btnPrimary, btnSecondary } from "@/lib/styles";

export default function Hero() {
  const lead = getCandidate("amira-hassan");
  const also = ["jonah-adeyemi", "sofia-lindgren", "priya-nair"].map((id) => getCandidate(id));

  return (
    <section className="bg-white">
      <Container className="grid items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-action">Candidate and company registry</p>
          <h1 className="mt-4 max-w-xl text-[2.6rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl">
            <span className="block">Great Talent.</span>
            <span className="block text-accent">Better Opportunities.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            A smarter way for professionals to showcase their experience and for companies to discover the people they need.
          </p>
          <div className="mt-8 h-px w-16 bg-accent" />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/find-talent" className={btnPrimary}>
              Explore Candidates
            </Link>
            <Link href="/register?role=candidate" className={btnSecondary}>
              Create Your Profile
            </Link>
          </div>
          {/* <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            The profiles in this demonstration are fictional, so you can try the directory without real personal data.
          </p> */}
        </div>
        <div className="lg:col-span-5" aria-hidden="true">
          <div className="relative pt-7">
            <div className="absolute inset-x-8 top-0 border border-line bg-white">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Another profile</span>
                <span className="text-[11px] text-muted">Sample</span>
              </div>
            </div>
            <div className="relative border border-line bg-white shadow-sheet">
              <div className="h-1 bg-accent" />
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Profile preview</p>
                <p className="text-[11px] text-action">Listed</p>
              </div>
              <div className="flex gap-4 p-4">
                <Portrait person={lead} className="h-24 w-[4.75rem] shrink-0" decorative />
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-ink">{lead.name}</p>
                  <p className="text-sm text-ink">{lead.title}</p>
                  <p className="mt-1 text-sm text-muted">
                    {lead.city}, {lead.country}
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    {lead.years} years · {lead.educationLevel} · {lead.availability}
                  </p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-1.5 px-4 pb-4">
                {lead.skills.slice(0, 4).map((skill) => (
                  <li key={skill} className="border border-line px-2 py-1 text-xs text-ink">
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="border-t border-line bg-canvas px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Shortlist</p>
                <ul className="mt-3 space-y-3">
                  {also.map((person) => (
                    <li key={person.id} className="flex items-center gap-3">
                      <Portrait person={person} className="h-10 w-8 shrink-0" decorative />
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-ink">{person.name}</span>
                        <span className="block truncate text-xs text-muted">{person.title}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
