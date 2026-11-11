import Container from "@/components/Container";
import Portrait from "@/components/Portrait";
import SectionIntro from "@/components/SectionIntro";
import { benefits } from "@/lib/content";
import { getCandidate } from "@/lib/data";

const previewIds = ["sofia-lindgren", "claire-dubois", "daniel-cho", "jonah-adeyemi"];

function DashboardPreview() {
  const rows = previewIds.map((id) => getCandidate(id));
  return (
    <figure className="border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <figcaption className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Employer view</figcaption>
        <span className="text-xs text-muted">Sample</span>
      </div>
      <div className="border-b border-line px-4 py-3">
        <p className="rounded-sm border border-line bg-canvas px-3 py-2 text-sm text-muted">Search: finance, Stockholm</p>
      </div>
      <ul>
        {rows.map((person) => (
          <li key={person.id} className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 last:border-b-0">
            <span className="flex min-w-0 items-center gap-3">
              <Portrait person={person} className="h-10 w-8 shrink-0" decorative />
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-ink">{person.name}</span>
                <span className="block truncate text-xs text-muted">
                  {person.category} · {person.years} years
                </span>
              </span>
            </span>
            <span className="shrink-0 text-xs font-medium text-action">CV</span>
          </li>
        ))}
      </ul>
      <p className="border-t border-line px-4 py-3 text-xs leading-relaxed text-muted">
        Illustration only. Downloads in the directory produce a real sample file.
      </p>
    </figure>
  );
}

export default function EmployerBenefits({ heading = true }) {
  const list = (
    <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <ol className="border-t border-line">
        {benefits.map((item, index) => (
          <li key={item.title} className="grid grid-cols-[auto_1fr] gap-4 border-b border-line py-5">
            <span className="text-sm font-semibold text-action">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <DashboardPreview />
    </div>
  );

  if (!heading) return list;

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionIntro eyebrow="For companies" title="Why hiring teams use Halden">
          The registry is meant to make a first review quieter: one profile, one CV, and a shortlist you can come back to.
        </SectionIntro>
        <div className="mt-12">{list}</div>
      </Container>
    </section>
  );
}
