export default function PortfolioPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Portfolio</h1>
        <p className="mt-2" style={{ color: "var(--dark-gray)" }}>A selection of photography and videography work.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-video bg-[--warm-gray] rounded" aria-label={`Portfolio item ${i+1}`}></div>
          ))}
        </div>
        <div className="mt-6">
          <a href="/contact" className="btn-cta">Book a Consultation</a>
        </div>
      </div>
    </div>
  );
}

