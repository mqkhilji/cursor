import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "").trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  // TODO: integrate with email service provider (e.g., Mailchimp, Resend)
  return NextResponse.redirect(new URL("/newsletter?subscribed=1", request.url));
}

