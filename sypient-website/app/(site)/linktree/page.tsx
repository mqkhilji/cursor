export default function LinktreePage() {
  const links = [
    { label: "Website", href: "/" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X (Twitter)", href: "#" },
  ];
  return (
    <div className="section">
      <div className="mx-auto max-w-md px-4">
        <h1 className="text-3xl font-bold text-center" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Sypient Linktree</h1>
        <ul className="mt-6 space-y-3">
          {links.map(l => (
            <li key={l.label}>
              <a className="btn-cta w-full block text-center" href={l.href}> {l.label} </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center">
          <a href="/contact" className="font-bold underline" style={{ color: "var(--brand-yellow)" }}>Connect with Us</a>
        </p>
      </div>
    </div>
  );
}

