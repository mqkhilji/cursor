export default function AboutPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-4xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>About Sypient Analytica LLC</h1>
        <p className="mt-4" style={{ color: "var(--dark-gray)" }}>
          We provide data solutions and professional media creation to help organizations make informed decisions and communicate effectively.
        </p>
        <p className="mt-4">
          <a href="/services" className="font-bold underline" style={{ color: "var(--brand-yellow)" }}>Learn how we can help</a>
        </p>
      </div>
    </div>
  );
}

