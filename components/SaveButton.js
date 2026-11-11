"use client";

import { Bookmark } from "lucide-react";
import { useShortlist } from "@/components/useShortlist";

export default function SaveButton({ id, name, className }) {
  const { ids, toggle } = useShortlist();
  const saved = ids.includes(id);

  return (
    <button
      type="button"
      className={className}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${name} from shortlist` : `Save ${name} to shortlist`}
      onClick={() => toggle(id)}
    >
      <Bookmark className="h-4 w-4" fill={saved ? "currentColor" : "none"} aria-hidden="true" />
      {saved ? "Saved" : "Save"}
    </button>
  );
}
