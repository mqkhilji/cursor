import { NextResponse } from "next/server";

const pages = [
  "",
  "about",
  "services",
  "services/business-intelligence",
  "services/data-analysis",
  "services/media",
  "services/media/videos",
  "services/media/photos",
  "blog",
  "tools",
  "linktree",
  "portfolio",
  "newsletter",
  "contact",
];

export async function GET() {
  const base = "https://www.sypient.com";
  const urls = pages
    .map((p) => `<url><loc>${base}/${p}</loc></url>`)
    .join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new NextResponse(body, { headers: { "Content-Type": "application/xml" } });
}

