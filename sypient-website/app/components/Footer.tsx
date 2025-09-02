import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[--warm-gray] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Sypient Analytica LLC</h3>
          <p className="text-sm mt-2" style={{ color: "var(--dark-gray)" }}>Data solutions and media creation.</p>
          <p className="text-xs mt-4" style={{ color: "var(--dark-gray)" }}>© 2025 Sypient Analytica LLC. All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-semibold" style={{ color: "var(--black)" }}>Navigate</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/tools" className="hover:underline">Tools</Link></li>
            <li><Link href="/linktree" className="hover:underline">Linktree</Link></li>
            <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link href="/newsletter" className="hover:underline">Newsletter</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold" style={{ color: "var(--black)" }}>Policies</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="hover:underline">Cookie Policy</Link></li>
            <li><Link href="/affiliates" className="hover:underline">Affiliate Links</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold" style={{ color: "var(--black)" }}>Connect</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/linktree" className="hover:underline" title="Follow Us" style={{ color: "var(--brand-yellow)" }}>Sypient Linktree</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">TikTok</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">X (Twitter)</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

