"use client";
import { useEffect, useState } from "react";

export function PopupCTA() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 10000); // 10s
    return () => clearTimeout(timer);
  }, []);
  if (!open) return null;
  return (
    <div className="cta-overlay" role="dialog" aria-modal="true" aria-label="Newsletter CTA">
      <div className="cta-modal">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold" style={{ color: "var(--black)" }}>Join Our Newsletter</h3>
          <button className="text-sm" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>
        <p className="mt-2 text-sm" style={{ color: "var(--dark-gray)" }}>
          Get insights on data analytics and media creation, straight to your inbox.
        </p>
        <form className="mt-4 flex gap-2" action="/api/subscribe" method="post">
          <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className="flex-1 border rounded-md px-3 py-2" />
          <button className="btn-cta" type="submit">Subscribe Now</button>
        </form>
      </div>
    </div>
  );
}

