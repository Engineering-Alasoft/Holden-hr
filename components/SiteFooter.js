import Link from "next/link";
import Logo from "@/components/Logo";
import Container from "@/components/Container";

const platform = [
  { href: "/", label: "Home" },
  { href: "/find-talent", label: "Find Talent" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/#faq", label: "Questions" },
];

const employers = [
  { href: "/for-employers", label: "For Employers" },
  { href: "/find-talent", label: "Explore Candidates" },
  { href: "/register?role=employer", label: "Register a company" },
  { href: "/shortlist", label: "Saved candidates" },
  { href: "/contact", label: "Contact" },
];

const seekers = [
  { href: "/for-job-seekers", label: "For Job Seekers" },
  { href: "/register?role=candidate", label: "Create a profile" },
  { href: "/upload", label: "Upload a CV" },
  { href: "/login", label: "Login" },
];

function Column({ title, links }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="text-sm text-[#D5DEE8] hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SocialIcon({ children, label, href }) {
  return (
    <a
      href={href}
      aria-label={label}
      title="Placeholder link"
      className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white hover:border-white"
    >
      {children}
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#D5DEE8]">
            Halden is a recruitment marketplace where professionals publish their experience and companies search for people to hire. This website is a frontend demonstration.
          </p>
          <div className="mt-6 flex gap-2">
            <SocialIcon label="LinkedIn placeholder" href="https://www.linkedin.com">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                <path d="M4.7 3.4A1.7 1.7 0 1 0 4.7 6.8 1.7 1.7 0 0 0 4.7 3.4zM3.3 8.6H6.1V20.5H3.3zM9 8.6h2.7v1.6h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4v7.4h-2.8v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5v6.7H9z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="X placeholder" href="https://x.com">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true" fill="currentColor">
                <path d="M14.7 10.3 21.4 3h-1.6l-5.8 6.4L9.3 3H3.4l7 10L3.4 21h1.6l6.2-6.8L14.7 21h5.9l-7.3-10.7Zm-2.2 2.4-.7-1L5.6 4.2h2.4l4.6 6.3.7 1 6 8.2h-2.4l-4.9-6.9Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Instagram placeholder" href="https://www.instagram.com">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zm4.35-2.55a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
        <Column title="Platform" links={platform} />
        <Column title="Employers" links={employers} />
        <Column title="Job seekers" links={seekers} />
      </Container>
      <Container className="grid gap-6 border-t border-white/15 py-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#D5DEE8]">
            <li>
              <a href="mailto:hello@halden.example" className="hover:text-white">
                hello@halden.example
              </a>
            </li>
            <li>
              <a href="tel:+442079460991" className="hover:text-white">
                +44 20 7946 0991
              </a>
            </li>
            <li>18 Clerkenwell Green, London EC1R 0DP</li>
          </ul>
          <p className="mt-3 text-xs text-[#D5DEE8]">Placeholder contact details. They are not monitored.</p>
        </div>
        <div className="flex flex-wrap items-end gap-x-5 gap-y-2 md:justify-end">
          <Link href="/privacy" className="text-sm text-[#D5DEE8] hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-[#D5DEE8] hover:text-white">
            Terms and Conditions
          </Link>
          <p className="text-sm text-[#D5DEE8]">© 2026 Halden</p>
        </div>
      </Container>
    </footer>
  );
}
