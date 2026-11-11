"use client";

import Link from "next/link";
import DownloadCvButton from "@/components/DownloadCvButton";
import SaveButton from "@/components/SaveButton";
import { btnPrimary, btnSecondary } from "@/lib/styles";

export default function ProfileActions({ person }) {
  return (
    <div className="mt-6 flex flex-col items-start gap-3">
      <DownloadCvButton person={person} className={btnPrimary} />
      <SaveButton id={person.id} name={person.name} className={btnSecondary} />
      <Link href="/shortlist" className="text-sm font-medium text-action">
        Open shortlist
      </Link>
    </div>
  );
}
