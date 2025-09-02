"use client";
import { useEffect, useState } from "react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="sticky-cta" role="region" aria-label="Sticky contact bar">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
        <span>Need help? <a href="/contact">Contact Now</a></span>
        <a href="/contact" className="btn-cta">Get a Quote</a>
      </div>
    </div>
  );
}

