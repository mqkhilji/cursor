export default function ContactPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Contact</h1>
        <p className="mt-2" style={{ color: "var(--dark-gray)" }}>We typically respond within one business day.</p>
        <form className="mt-6 space-y-4" action="/api/contact" method="post">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input id="name" name="name" required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <input id="subject" name="subject" required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="flex gap-3">
            <button className="btn-cta" type="submit">Submit Inquiry</button>
            <a href="tel:+10000000000" className="btn-cta">Call Now</a>
          </div>
        </form>
      </div>
    </div>
  );
}

