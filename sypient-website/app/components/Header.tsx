import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/tools", label: "Tools" },
  { href: "/linktree", label: "Linktree" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="bg-white/90 backdrop-blur border-b border-[--warm-gray] sticky top-0 z-30">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between" aria-label="Primary">
        <Link href="/" className="text-xl font-bold" aria-label="Sypient Analytica LLC Home" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>
          Sypient Analytica
        </Link>
        <ul className="hidden md:flex items-center gap-6" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <Link role="menuitem" href={link.href} className="text-sm font-medium hover:underline" style={{ color: "var(--black)" }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="/contact" className="btn-cta hidden md:inline-flex">Get a Quote</a>
        </div>
      </nav>
    </header>
  );
}

