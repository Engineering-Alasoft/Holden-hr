import { yearsLabel } from "@/lib/data";

const WIN_ANSI = {
  "\u20ac": 0x80,
  "\u201a": 0x82,
  "\u0192": 0x83,
  "\u201e": 0x84,
  "\u2026": 0x85,
  "\u2020": 0x86,
  "\u2021": 0x87,
  "\u02c6": 0x88,
  "\u2030": 0x89,
  "\u0160": 0x8a,
  "\u2039": 0x8b,
  "\u0152": 0x8c,
  "\u017d": 0x8e,
  "\u2018": 0x91,
  "\u2019": 0x92,
  "\u201c": 0x93,
  "\u201d": 0x94,
  "\u2022": 0x95,
  "\u2013": 0x96,
  "\u2014": 0x97,
  "\u02dc": 0x98,
  "\u2122": 0x99,
  "\u0161": 0x9a,
  "\u203a": 0x9b,
  "\u0153": 0x9c,
  "\u017e": 0x9e,
  "\u0178": 0x9f,
};

function pdfText(value) {
  let out = "";
  for (const ch of value) {
    if (ch === "\\") {
      out += "\\\\";
      continue;
    }
    if (ch === "(") {
      out += "\\(";
      continue;
    }
    if (ch === ")") {
      out += "\\)";
      continue;
    }
    const code = ch.codePointAt(0);
    if (code >= 32 && code <= 126) {
      out += ch;
      continue;
    }
    if (code >= 160 && code <= 255) {
      out += `\\${code.toString(8).padStart(3, "0")}`;
      continue;
    }
    if (WIN_ANSI[ch]) {
      out += `\\${WIN_ANSI[ch].toString(8).padStart(3, "0")}`;
      continue;
    }
    out += "?";
  }
  return out;
}

function wrap(text, width) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > width && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  return lines;
}

export function cvLines(person) {
  const lines = [
    "HALDEN",
    "Sample curriculum vitae",
    "",
    person.name,
    person.title,
    `${person.city}, ${person.country}`,
    person.category,
    `${yearsLabel(person.years)} of experience`,
    person.availability,
    `Stated expectation: ${person.salary}`,
    "",
    "SUMMARY",
    ...wrap(person.summary, 88),
    "",
    "SKILLS",
    ...wrap(person.skills.join(", "), 88),
    "",
    "EXPERIENCE",
  ];

  person.history.forEach((job) => {
    lines.push(`${job.role}, ${job.employer}`);
    lines.push(job.period);
    lines.push(...wrap(job.summary, 88));
    lines.push("");
  });

  lines.push("EDUCATION");
  person.education.forEach((item) => {
    lines.push(`${item.qualification}, ${item.institution}, ${item.year}`);
  });
  lines.push("");
  lines.push(
    ...wrap(
      "Demonstration file generated in the browser for the Halden prototype. It is not an official CV and it was not uploaded by the person named above.",
      88,
    ),
  );
  return lines;
}

export function cvFileName(person) {
  const slug = person.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `Halden-sample-CV-${slug}.pdf`;
}

export function buildCvPdfBytes(person) {
  const lines = cvLines(person);
  const fontSize = lines.length > 48 ? 10 : 11;
  const leading = lines.length > 48 ? 13 : 15;
  const commands = ["BT", `/F1 ${fontSize} Tf`, `${leading} TL`, "48 790 Td"];
  lines.forEach((line, index) => {
    if (index > 0) commands.push("T*");
    commands.push(`(${pdfText(line)}) Tj`);
  });
  commands.push("ET");
  const stream = commands.join("\n");

  const objects = [
    "1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj",
    "2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj",
    "3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>endobj",
    `4 0 obj<< /Length ${stream.length} >>stream\n${stream}\nendstream\nendobj`,
    "5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object) => {
    offsets.push(pdf.length);
    pdf += `${object}\n`;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let index = 1; index <= objects.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return new TextEncoder().encode(pdf);
}
