export default function NewsletterPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-md px-4">
        <h1 className="text-3xl font-bold text-center" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Newsletter</h1>
        <p className="mt-2 text-center" style={{ color: "var(--dark-gray)" }}>Insights on data and media. No spam.</p>
        <form className="mt-6" action="/api/subscribe" method="post">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full border rounded-md px-3 py-2" />
          <button className="btn-cta mt-3 w-full" type="submit">Subscribe Now</button>
        </form>
      </div>
    </div>
  );
}

