import Link from "next/link";

export default function MediaPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Media Creation</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[--warm-gray] p-6 bg-white">
            <h2 className="text-xl font-semibold">Videos</h2>
            <ul className="mt-2 list-disc pl-5 text-sm">
              <li>Explainer Videos</li>
              <li>30-Second Commercials</li>
              <li>Complete Product Reviews</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <Link href="/services/media/videos" className="btn-cta">Explore Videos</Link>
              <a href="/contact" className="btn-cta">Request a Demo</a>
            </div>
          </div>
          <div className="rounded-xl border border-[--warm-gray] p-6 bg-white">
            <h2 className="text-xl font-semibold">Photos</h2>
            <ul className="mt-2 list-disc pl-5 text-sm">
              <li>Corporate Events</li>
              <li>Product Photos</li>
              <li>Corporate Headshots</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <Link href="/services/media/photos" className="btn-cta">Explore Photos</Link>
              <a href="/contact" className="btn-cta">Request a Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

