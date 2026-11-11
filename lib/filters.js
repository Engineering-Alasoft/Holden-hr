import { experienceOptions } from "@/lib/data";

export function matchesExperience(years, range) {
  if (!range) return true;
  if (range === "0-2") return years <= 2;
  if (range === "3-5") return years >= 3 && years <= 5;
  if (range === "6-9") return years >= 6 && years <= 9;
  if (range === "10+") return years >= 10;
  return true;
}

export function filterCandidates(list, filters) {
  const query = filters.query.trim().toLowerCase();

  const matched = list.filter((person) => {
    if (filters.category && person.category !== filters.category) return false;
    if (filters.location && locationLabel(person) !== filters.location) return false;
    if (filters.skill && !person.skills.includes(filters.skill)) return false;
    if (filters.availability && person.availability !== filters.availability) return false;
    if (!matchesExperience(person.years, filters.experience)) return false;

    if (!query) return true;

    const haystack = [
      person.name,
      person.title,
      person.city,
      person.country,
      person.category,
      person.summary,
      person.availability,
      ...person.skills,
      ...person.education.flatMap((item) => [item.qualification, item.institution]),
      ...person.history.flatMap((item) => [item.role, item.employer, item.summary]),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  return matched.sort((a, b) => b.years - a.years || a.name.localeCompare(b.name));
}

export function locationLabel(person) {
  return `${person.city}, ${person.country}`;
}

export function normalizeFilters(input, lists) {
  const experienceValues = experienceOptions.map((item) => item.value);
  return {
    query: (input.query || "").trim().slice(0, 80),
    category: lists.categories.includes(input.category) ? input.category : "",
    location: lists.locations.includes(input.location) ? input.location : "",
    skill: lists.skills.includes(input.skill) ? input.skill : "",
    experience: experienceValues.includes(input.experience) ? input.experience : "",
    availability: lists.availability.includes(input.availability) ? input.availability : "",
  };
}

export function toTalentQuery(filters) {
  const params = new URLSearchParams();
  if (filters.query) params.set("q", filters.query);
  if (filters.category) params.set("category", filters.category);
  if (filters.location) params.set("location", filters.location);
  if (filters.skill) params.set("skill", filters.skill);
  if (filters.experience) params.set("experience", filters.experience);
  if (filters.availability) params.set("availability", filters.availability);
  const text = params.toString();
  return text ? `/find-talent?${text}` : "/find-talent";
}

export function hasActiveFilters(filters) {
  return Boolean(
    filters.query ||
      filters.category ||
      filters.location ||
      filters.skill ||
      filters.experience ||
      filters.availability,
  );
}
