import Link from "next/link";
import Portrait from "@/components/Portrait";
import DownloadCvButton from "@/components/DownloadCvButton";
import SaveButton from "@/components/SaveButton";
import { yearsLabel } from "@/lib/data";
import { btnPrimarySm, btnSecondarySm } from "@/lib/styles";

const dots = {
  "Available now": "bg-accent",
  "One month notice": "bg-ink",
  "Three month notice": "bg-muted",
  "Open to conversations": "bg-[#7BA4D4]",
};

export default function CandidateRow({ person, onSkill }) {
  const education = person.education[0]?.qualification || person.educationLevel;

  return (
    <article className="border-b border-line px-4 py-6 last:border-b-0 sm:px-6">
      <div className="flex gap-4">
        <Portrait person={person} className="h-[4.75rem] w-[3.8rem] shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-ink">{person.name}</h3>
              <p className="text-sm font-medium text-ink">{person.title}</p>
            </div>
            <p className="inline-flex items-center gap-2 text-sm text-muted">
              <span className={`h-1.5 w-1.5 ${dots[person.availability] || "bg-muted"}`} aria-hidden="true" />
              {person.availability}
            </p>
          </div>
          <dl className="mt-3 grid gap-1 text-sm text-muted sm:grid-cols-3">
            <div>
              <dt className="sr-only">Location</dt>
              <dd>
                {person.city}, {person.country}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Experience</dt>
              <dd>{yearsLabel(person.years)} of experience</dd>
            </div>
            <div>
              <dt className="sr-only">Education</dt>
              <dd>{education}</dd>
            </div>
          </dl>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {person.skills.map((skill) => (
              <li key={skill}>
                {onSkill ? (
                  <button
                    type="button"
                    onClick={() => onSkill(skill)}
                    className="border border-line px-2 py-1.5 text-xs text-ink hover:border-action hover:text-action"
                  >
                    {skill}
                    <span className="sr-only">, filter by this skill</span>
                  </button>
                ) : (
                  <span className="inline-block border border-line px-2 py-1.5 text-xs text-ink">{skill}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href={`/candidates/${person.id}`} className={btnPrimarySm}>
              View Profile
            </Link>
            <DownloadCvButton person={person} className={btnSecondarySm} />
            <SaveButton id={person.id} name={person.name} className={btnSecondarySm} />
          </div>
        </div>
      </div>
    </article>
  );
}
