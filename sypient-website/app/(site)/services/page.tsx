import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Services</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-[--warm-gray] p-6 bg-white">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--black)" }}>Data Solutions</h2>
            <ul className="mt-3 list-disc pl-5 text-sm" style={{ color: "var(--dark-gray)" }}>
              <li><Link className="underline" href="/services/business-intelligence">Business Intelligence</Link></li>
              <li><Link className="underline" href="/services/data-analysis">Data Analysis</Link></li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a href="/contact" className="btn-cta">Request a Demo</a>
              <a href="/portfolio" className="btn-cta">View Portfolio</a>
            </div>
          </div>
          <div className="rounded-xl border border-[--warm-gray] p-6 bg-white">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--black)" }}>Media Creation</h2>
            <ul className="mt-3 list-disc pl-5 text-sm" style={{ color: "var(--dark-gray)" }}>
              <li><Link className="underline" href="/services/media/videos">Videos</Link></li>
              <li><Link className="underline" href="/services/media/photos">Photos</Link></li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a href="/contact" className="btn-cta">Request a Demo</a>
              <a href="/portfolio" className="btn-cta">View Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

