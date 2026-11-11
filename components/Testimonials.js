import Container from "@/components/Container";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [lead, ...rest] = testimonials;

  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="stories-heading">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-action">Placeholder voices</p>
        <h2 id="stories-heading" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] md:leading-tight">
          Notes from hiring teams and candidates
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          These quotations were written for the layout. They are not reviews from real customers.
        </p>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <blockquote className="lg:col-span-7">
            <p className="text-2xl font-medium leading-snug text-ink md:text-[1.85rem]">{`"${lead.quote}"`}</p>
            <footer className="mt-6 text-sm">
              <span className="font-semibold text-ink">{lead.name}</span>
              <span className="text-muted">, {lead.role}</span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-[0.14em] text-muted">Fictional sample</span>
            </footer>
          </blockquote>
          <div className="flex flex-col gap-10 border-line lg:col-span-5 lg:border-l lg:pl-10">
            {rest.map((item) => (
              <blockquote key={item.id}>
                <p className="text-lg font-medium leading-snug text-ink">{`"${item.quote}"`}</p>
                <footer className="mt-4 text-sm">
                  <span className="font-semibold text-ink">{item.name}</span>
                  <span className="text-muted">, {item.role}</span>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-[0.14em] text-muted">Fictional sample</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
