"use client";

import Link from "next/link";
import CandidateRow from "@/components/CandidateRow";
import { useShortlist } from "@/components/useShortlist";
import { getCandidate } from "@/lib/data";
import { btnPrimary } from "@/lib/styles";

export default function ShortlistView() {
  const { ids, ready } = useShortlist();

  if (!ready) {
    return <p className="text-sm text-muted">Checking this browser for saved profiles.</p>;
  }

  const people = ids.map((id) => getCandidate(id)).filter(Boolean);

  if (!people.length) {
    return (
      <div className="border border-line bg-white px-6 py-16 text-center">
        <p className="text-lg font-semibold text-ink">No one saved yet</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
          Save a sample profile from the directory. The list stays on this device and is not sent to a server.
        </p>
        <Link href="/find-talent" className={`${btnPrimary} mt-6`}>
          Explore Candidates
        </Link>
      </div>
    );
  }

  return (
    <div className="border border-line bg-white">
      <p className="border-b border-line px-4 py-3 text-sm text-muted sm:px-6">
        {people.length} saved {people.length === 1 ? "profile" : "profiles"} in this browser.
      </p>
      {people.map((person) => (
        <CandidateRow key={person.id} person={person} />
      ))}
    </div>
  );
}
