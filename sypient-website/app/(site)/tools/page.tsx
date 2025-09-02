export default function ToolsPage() {
  const tools = [
    { name: "KPI Dashboard Template", cta: "Download Now" },
    { name: "Video Script Outline", cta: "Download Now" },
    { name: "ROI Calculator", cta: "Try Our Tools" },
  ];
  return (
    <div className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Tools</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {tools.map(t => (
            <div key={t.name} className="rounded-xl border border-[--warm-gray] p-6 bg-white transition-transform hover:-translate-y-0.5">
              <h3 className="text-lg font-semibold" style={{ color: "var(--black)" }}>{t.name}</h3>
              <p className="text-sm mt-2" style={{ color: "var(--dark-gray)" }}>Useful resource for data and media workflows.</p>
              <div className="mt-4"><a href="#" className="btn-cta">{t.cta}</a></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

