import { CTAButton } from "./components/CTAButton";

export default function Home() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>
              Data Solutions & Media Creation that <span className="marker-underline">Drive</span> Growth
            </h1>
            <p className="mt-4 text-lg" style={{ color: "var(--dark-gray)" }}>
              Sypient Analytica LLC delivers business intelligence, automation, and compelling media content to help your organization make smarter decisions and tell better stories.
            </p>
            <div className="mt-6 flex gap-3">
              <CTAButton href="/contact" pulse className="btn-cta--pulse">Get a Quote</CTAButton>
              <CTAButton href="/services">Explore Services</CTAButton>
            </div>
            <p className="mt-4 text-sm">
              <a href="/contact" className="font-bold underline" style={{ color: "var(--brand-yellow)" }}>Contact us today to automate your reports</a>
            </p>
          </div>
          <div className="rounded-xl p-6 bg-[--soft-yellow-tint]">
            <div className="aspect-video w-full rounded-lg bg-[--warm-gray]" aria-hidden />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>
            Transform Your <span className="marker-underline">Data</span> with Our Solutions
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { title: "Business Intelligence", desc: "Report creation and automation.", href: "/services/business-intelligence" },
              { title: "Data Analysis", desc: "Excel, SQL, and Python analysis.", href: "/services/data-analysis" },
              { title: "Media Creation", desc: "Video and photography production.", href: "/services/media" },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-[--warm-gray] p-6 bg-white">
                <h3 className="text-xl font-semibold" style={{ color: "var(--black)" }}>{card.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--dark-gray)" }}>{card.desc}</p>
                <div className="mt-4">
                  <a href={card.href} className="btn-cta">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>
              See What We <span className="marker-underline">Create</span>
            </h2>
            <p className="mt-2" style={{ color: "var(--dark-gray)" }}>From explainers to commercials and product reviews, explore our portfolio.</p>
            <div className="mt-4 flex gap-3">
              <CTAButton href="/portfolio" pulse>View Portfolio</CTAButton>
              <CTAButton href="/contact">Book a Consultation</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-[--warm-gray] rounded" aria-hidden />
            <div className="aspect-square bg-[--warm-gray] rounded" aria-hidden />
            <div className="aspect-square bg-[--warm-gray] rounded" aria-hidden />
            <div className="aspect-square bg-[--warm-gray] rounded" aria-hidden />
            <div className="aspect-square bg-[--warm-gray] rounded" aria-hidden />
            <div className="aspect-square bg-[--warm-gray] rounded" aria-hidden />
          </div>
        </div>
      </section>

      <section className="section section--highlight">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>
              Ready to <span className="marker-underline">Transform</span> Your Operations?
            </h2>
            <p className="mt-2" style={{ color: "var(--dark-gray)" }}>
              Talk to our team about BI automation, analytics, and media that converts.
            </p>
          </div>
          <div className="flex md:justify-end">
            <CTAButton href="/contact">Submit Inquiry</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
