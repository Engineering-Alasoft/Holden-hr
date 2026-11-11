const skinShade = {
  "#F3D6C3": "#E2BBA3",
  "#E6C2A6": "#D2A888",
  "#D9A679": "#C48D62",
  "#C68642": "#A86C34",
  "#8D5524": "#73441C",
  "#5C3A28": "#3E261A",
};

function Hair({ style, color }) {
  if (style === "short" || style === "beard") {
    return <path d="M24 44c.4-16 8-25 16-25s15.6 9 16 25c-3-8-8-12-16-12s-13 4-16 12z" fill={color} />;
  }
  if (style === "side") {
    return <path d="M22 46c1-18 9-28 18-28 11 0 18 10 19 26-8-10-16-11-24-6-5 3-9 4-13 8z" fill={color} />;
  }
  if (style === "bun") {
    return (
      <g fill={color}>
        <circle cx="40" cy="16" r="6.5" />
        <path d="M24 45c.4-16 8-24 16-24s15.6 8 16 24c-3-8-8-12-16-12s-13 4-16 12z" />
      </g>
    );
  }
  if (style === "curls") {
    return (
      <g fill={color}>
        <circle cx="26" cy="36" r="7" />
        <circle cx="36" cy="24" r="8" />
        <circle cx="50" cy="24" r="8" />
        <circle cx="58" cy="36" r="7" />
        <path d="M24 48c1-8 8-14 16-14s15 6 16 14c-4-5-9-7-16-7s-12 2-16 7z" />
      </g>
    );
  }
  if (style === "long") {
    return <path d="M24 46c1-14 7-22 16-22s15 8 16 22c-4-8-9-11-16-11s-12 3-16 11z" fill={color} />;
  }
  return null;
}

export default function Portrait({ person, className = "", decorative = false }) {
  const portrait = person.portrait;
  const shade = skinShade[portrait.skin] || portrait.skin;
  const collar = portrait.shirt.toLowerCase() === "#f4f7fb" ? "#172B46" : "#F7FAFE";
  const showEars = portrait.style === "short" || portrait.style === "side" || portrait.style === "beard";

  return (
    <svg
      viewBox="0 0 80 100"
      className={`block rounded-sm ${className}`}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : `Illustrated portrait of ${person.name}`}
    >
      <rect width="80" height="100" fill={portrait.bg} />
      {portrait.style === "long" ? (
        <path
          d="M18 50c2 16 4 34 1 50h9c2-16 0-28-1-36 4 6 9 8 13 8s9-2 13-8c-1 8-3 20-1 36h9c-3-16-1-34 1-50-6-4-14-6-22-6s-16 2-22 6z"
          fill={portrait.hair}
        />
      ) : null}
      <path d="M6 100c2-26 16-38 34-38s32 12 34 38" fill={portrait.shirt} />
      <path d="M32 70l8 14 8-14" fill={collar} />
      {portrait.style === "hijab" ? (
        <path d="M14 58C16 26 26 12 40 12s24 14 26 46c3 16 1 32-3 42H17c-4-10-6-26-3-42z" fill={portrait.hair} />
      ) : null}
      <rect x="34" y="62" width="12" height="14" fill={portrait.skin} />
      {showEars ? (
        <>
          <ellipse cx="22" cy="48" rx="3" ry="4.2" fill={shade} />
          <ellipse cx="58" cy="48" rx="3" ry="4.2" fill={shade} />
        </>
      ) : null}
      <ellipse cx="40" cy="46" rx={portrait.style === "hijab" ? 13 : 16} ry={portrait.style === "hijab" ? 15 : 18} fill={portrait.skin} />
      {portrait.style === "hijab" ? null : <Hair style={portrait.style} color={portrait.hair} />}
      {portrait.style === "beard" ? (
        <path d="M28 54c2 11 6 16 12 16s10-5 12-16c-3 5-7 7-12 7s-9-2-12-7z" fill={portrait.hair} />
      ) : null}
      <path d="M31 46h6M43 46h6" stroke="#172B46" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 41c2-1.2 4.2-1.2 6.2 0M43.8 41c2-1.2 4.2-1.2 6.2 0" stroke="#172B46" strokeWidth="1.15" strokeLinecap="round" fill="none" />
      <path d="M35 58c2.2 2.2 7.8 2.2 10 0" stroke={shade} strokeWidth="1.3" strokeLinecap="round" fill="none" />
      {portrait.glasses ? (
        <g fill="none" stroke="#172B46" strokeWidth="1.25">
          <circle cx="34" cy="46.5" r="4.4" />
          <circle cx="46" cy="46.5" r="4.4" />
          <path d="M38.4 46.5h3.2" />
        </g>
      ) : null}
    </svg>
  );
}
