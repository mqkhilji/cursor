export default function PhotosPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Photos</h1>
        <ul className="mt-4 list-disc pl-5 text-sm" style={{ color: "var(--dark-gray)" }}>
          <li>Corporate Events</li>
          <li>Product Photos</li>
          <li>Corporate Headshots</li>
        </ul>
        <div className="mt-4 flex gap-2">
          <a href="/portfolio" className="btn-cta">View Photo Samples</a>
          <a href="/contact" className="btn-cta">Book a Consultation</a>
        </div>
      </div>
    </div>
  );
}

