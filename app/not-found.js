import Link from "next/link";
import Container from "@/components/Container";
import { btnPrimary } from "@/lib/styles";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-action">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">This page is not in the prototype.</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        The link may be mistyped, or the sample profile is not in the registry.
      </p>
      <Link href="/find-talent" className={`${btnPrimary} mt-8`}>
        Browse candidates
      </Link>
    </Container>
  );
}
