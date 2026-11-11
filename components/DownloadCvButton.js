"use client";

import { buildCvPdfBytes, cvFileName } from "@/lib/cv";
import { FileDown } from "lucide-react";

export default function DownloadCvButton({ person, className, label = "Download CV" }) {
  function download() {
    const bytes = buildCvPdfBytes(person);
    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = cvFileName(person);
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <button type="button" className={className} onClick={download}>
      <FileDown className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>
  );
}
