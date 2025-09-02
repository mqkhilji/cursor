export default function BusinessIntelligencePage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Business Intelligence</h1>
        <p className="mt-2" style={{ color: "var(--dark-gray)" }}>Report creations and automations tailored to your KPIs.</p>
        <div className="mt-4 flex gap-2">
          <a href="/contact" className="btn-cta">Request a Demo</a>
          <a href="/portfolio" className="btn-cta">View Portfolio</a>
        </div>
      </div>
    </div>
  );
}

