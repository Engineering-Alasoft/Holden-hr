import Container from "@/components/Container";
import { stats } from "@/lib/content";

export default function StatsBand() {
  return (
    <section aria-label="Platform statistics" className="border-y border-[#D3E4F5] bg-primary">
      <Container className="py-8 md:py-10">
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col ${index > 0 ? "lg:border-l lg:border-[#C9DCF0] lg:pl-8" : ""}`}
            >
              <dt className="order-2 mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
