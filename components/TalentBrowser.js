"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import CandidateRow from "@/components/CandidateRow";
import { useShortlist } from "@/components/useShortlist";
import {
  availabilityOptions,
  candidates,
  categories,
  experienceOptions,
  featuredCandidates,
  locationOptions,
  skillOptions,
} from "@/lib/data";
import { filterCandidates, hasActiveFilters, normalizeFilters, toTalentQuery } from "@/lib/filters";
import { btnSecondary } from "@/lib/styles";

const lists = {
  categories: categories.map((item) => item.name),
  locations: locationOptions(),
  skills: skillOptions(),
  availability: availabilityOptions,
};

function FilterSelect({ id, label, value, onChange, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-ink">
        {label}
      </label>
      <div className="relative mt-1.5">
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-sm border border-line bg-white py-2.5 pl-3 pr-9 text-sm text-ink"
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function TalentBrowser({
  mode = "directory",
  initialQuery = "",
  initialCategory = "",
  initialLocation = "",
  initialSkill = "",
  initialExperience = "",
  initialAvailability = "",
}) {
  const starting = normalizeFilters(
    {
      query: initialQuery,
      category: initialCategory,
      location: initialLocation,
      skill: initialSkill,
      experience: initialExperience,
      availability: initialAvailability,
    },
    lists,
  );
  const [query, setQuery] = useState(starting.query);
  const [category, setCategory] = useState(starting.category);
  const [location, setLocation] = useState(starting.location);
  const [skill, setSkill] = useState(starting.skill);
  const [experience, setExperience] = useState(starting.experience);
  const [availability, setAvailability] = useState(starting.availability);
  const { ids } = useShortlist();

  useEffect(() => {
    if (mode !== "directory") return;
    const next = normalizeFilters(
      {
        query: initialQuery,
        category: initialCategory,
        location: initialLocation,
        skill: initialSkill,
        experience: initialExperience,
        availability: initialAvailability,
      },
      lists,
    );
    setQuery(next.query);
    setCategory(next.category);
    setLocation(next.location);
    setSkill(next.skill);
    setExperience(next.experience);
    setAvailability(next.availability);
  }, [mode, initialQuery, initialCategory, initialLocation, initialSkill, initialExperience, initialAvailability]);

  const filters = { query, category, location, skill, experience, availability };
  const active = hasActiveFilters(filters);
  const results = mode === "featured" && !active ? featuredCandidates() : filterCandidates(candidates, filters);

  function reset() {
    setQuery("");
    setCategory("");
    setLocation("");
    setSkill("");
    setExperience("");
    setAvailability("");
  }

  const countLabel =
    mode === "featured" && !active
      ? `Showing ${results.length} featured profiles from the sample registry.`
      : `Showing ${results.length} of ${candidates.length} sample profiles.`;

  return (
    <div className="border border-line bg-white">
      <form
        className="border-b border-line bg-canvas p-4 sm:p-5"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <label htmlFor="talent-search" className="block text-xs font-medium text-ink">
            Search
          </label>
          <div className="relative mt-1.5">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input
              id="talent-search"
              value={query}
              maxLength={80}
              autoComplete="off"
              placeholder="Name, title, skill or employer"
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-sm border border-line bg-white py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-muted"
            />
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <FilterSelect id="filter-location" label="Location" value={location} onChange={setLocation}>
            <option value="">Any location</option>
            {lists.locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </FilterSelect>
          <FilterSelect id="filter-experience" label="Experience" value={experience} onChange={setExperience}>
            <option value="">Any experience</option>
            {experienceOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </FilterSelect>
          <FilterSelect id="filter-skill" label="Skills" value={skill} onChange={setSkill}>
            <option value="">Any skill</option>
            {lists.skills.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </FilterSelect>
          <FilterSelect id="filter-category" label="Job category" value={category} onChange={setCategory}>
            <option value="">Any category</option>
            {lists.categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </FilterSelect>
          <FilterSelect id="filter-availability" label="Availability" value={availability} onChange={setAvailability}>
            <option value="">Any availability</option>
            {lists.availability.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </FilterSelect>
        </div>
      </form>
      <div className="flex flex-col gap-3 border-b border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p aria-live="polite" className="text-sm text-muted">
          {countLabel}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {active ? (
            <button type="button" onClick={reset} className="text-sm font-medium text-action">
              Clear filters
            </button>
          ) : null}
          {mode === "featured" ? (
            <Link href={toTalentQuery(filters)} className="text-sm font-medium text-action">
              Open in Find Talent
            </Link>
          ) : (
            <Link href="/shortlist" className="text-sm font-medium text-action">
              Shortlist ({ids.length})
            </Link>
          )}
        </div>
      </div>
      {results.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <p className="text-lg font-semibold text-ink">No profiles match</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
            None of the sample candidates fit these filters. Remove one and try again.
          </p>
          <button type="button" onClick={reset} className={`${btnSecondary} mt-6`}>
            Clear filters
          </button>
        </div>
      ) : (
        <div>
          {results.map((person) => (
            <CandidateRow key={person.id} person={person} onSkill={setSkill} />
          ))}
        </div>
      )}
    </div>
  );
}
