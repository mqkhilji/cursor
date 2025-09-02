import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";
import { PopupCTA } from "./components/PopupCTA";
import { Analytics } from "./components/Analytics";

export const metadata: Metadata = {
  title: "Sypient Analytica LLC — Data Solutions & Media Creation",
  description: "Data analytics, business intelligence, automation, and professional media production.",
  metadataBase: new URL("https://www.sypient.com"),
  openGraph: {
    title: "Sypient Analytica LLC",
    description: "Data solutions and media creation for businesses worldwide.",
    url: "https://www.sypient.com",
    siteName: "Sypient Analytica",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sypient Analytica LLC",
    description: "Data solutions and media creation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
        <PopupCTA />
        <Analytics />
      </body>
    </html>
  );
}
