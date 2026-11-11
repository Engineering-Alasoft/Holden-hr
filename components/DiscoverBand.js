import Link from "next/link";
import Container from "@/components/Container";
import { btnPrimary } from "@/lib/styles";

export default function DiscoverBand() {
  return (
    <section className="bg-primary">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">Your Experience Deserves to Be Discovered.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Build your professional profile, showcase your skills and help the right companies find you.
          </p>
        </div>
        <Link href="/upload" className={btnPrimary}>
          Upload Your CV
        </Link>
      </Container>
    </section>
  );
}
