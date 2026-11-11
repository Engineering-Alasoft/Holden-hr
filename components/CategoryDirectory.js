import Link from "next/link";
import { ArrowRight, Code2, Handshake, Headphones, Landmark, Megaphone, PenTool, SquareKanban, Users } from "lucide-react";
import Container from "@/components/Container";
import SectionIntro from "@/components/SectionIntro";
import { categorySummaries } from "@/lib/data";

const icons = {
  code: Code2,
  megaphone: Megaphone,
  users: Users,
  landmark: Landmark,
  pen: PenTool,
  handshake: Handshake,
  headphones: Headphones,
  kanban: SquareKanban,
};

export default function CategoryDirectory() {
  const items = categorySummaries();

  return (
    <section className="bg-canvas py-16 md:py-24" aria-labelledby="categories-heading">
      <Container>
        <SectionIntro eyebrow="Directory" title="Find the Right Talent for Every Role" titleId="categories-heading">
          Browse the sample registry by the kind of work people do. The counts are the fictional profiles included in this prototype.
        </SectionIntro>
        <ul className="mt-10 grid border-l border-t border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
          {items.map((category) => {
            const Icon = icons[category.icon] || Code2;
            return (
              <li key={category.slug} className="border-b border-r border-line">
                <Link
                  href={`/find-talent?category=${encodeURIComponent(category.name)}`}
                  className="group flex h-full flex-col px-5 py-6 hover:bg-primary"
                >
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-5 text-base font-semibold text-ink">{category.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{category.blurb}</p>
                  <p className="mt-6 text-sm text-ink">
                    {category.count} sample {category.count === 1 ? "profile" : "profiles"}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-action">
                    Browse
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
