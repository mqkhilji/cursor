"use client";
import { useMemo, useState } from "react";

type Post = { id: string; title: string; category: string; excerpt: string };

const POSTS: Post[] = [
  { id: "1", title: "Trends in Business Intelligence", category: "Data", excerpt: "What to watch in BI for 2025." },
  { id: "2", title: "Filming Compelling Explainers", category: "Media", excerpt: "Tips to keep viewers engaged." },
  { id: "3", title: "Automating Reports with SQL", category: "Data", excerpt: "Reduce manual work with automation." },
];

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(POSTS.map(p => p.category)))];
  const filtered = useMemo(() => {
    return POSTS.filter(p => (category === "All" || p.category === category) && p.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, category]);

  return (
    <div className="section">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1fr_320px] gap-10">
        <div>
          <h1 className="text-4xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Blog</h1>
          <div className="mt-6 flex gap-3">
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search posts" className="border rounded-md px-3 py-2 flex-1" />
            <select value={category} onChange={e=>setCategory(e.target.value)} className="border rounded-md px-3 py-2">
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <ul className="mt-6 space-y-4">
            {filtered.map(p => (
              <li key={p.id} className="rounded-lg border border-[--warm-gray] p-4 bg-white">
                <a href={`/blog/${p.id}`} className="text-xl font-semibold hover:underline" style={{ color: "var(--black)" }}>{p.title}</a>
                <p className="text-sm mt-1" style={{ color: "var(--dark-gray)" }}>{p.excerpt}</p>
                <div className="mt-3"><a href="/contact" className="btn-cta">Contact Us for Custom Solutions</a></div>
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <div className="rounded-xl border border-[--warm-gray] p-4 bg-white sticky top-24">
            <h2 className="text-lg font-semibold" style={{ color: "var(--black)" }}>Stay Updated</h2>
            <p className="text-sm mt-1" style={{ color: "var(--dark-gray)" }}>Join our newsletter for insights.</p>
            <form className="mt-3" action="/api/subscribe" method="post">
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full border rounded-md px-3 py-2" />
              <button className="btn-cta mt-2 w-full" type="submit">Subscribe Now</button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}

