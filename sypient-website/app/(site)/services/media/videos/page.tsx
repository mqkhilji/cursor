export default function VideosPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Videos</h1>
        <ul className="mt-4 list-disc pl-5 text-sm" style={{ color: "var(--dark-gray)" }}>
          <li>Explainer Videos</li>
          <li>30-Second Commercials</li>
          <li>Complete Product Reviews</li>
        </ul>
        <div className="mt-4 flex gap-2">
          <a href="/portfolio" className="btn-cta">View Video Samples</a>
          <a href="/contact" className="btn-cta">Book a Consultation</a>
        </div>
      </div>
    </div>
  );
}

