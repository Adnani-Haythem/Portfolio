import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Caveat } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/ui/JsonLd";
import { IDENTITY } from "@/lib/portfolio-data";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex", display: "swap", weight: ["400", "500", "600"] });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap", weight: ["600", "700"] });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${IDENTITY.name} — ${IDENTITY.role}`,
    template: `%s | ${IDENTITY.name}`,
  },
  description: `${IDENTITY.name}'s portfolio focused on cybersecurity, artificial intelligence, security automation, and applied software engineering.`,
  keywords: [IDENTITY.name, "cybersecurity", "artificial intelligence", "AI security", "security automation", "machine learning", "ENIT"],
  authors: [{ name: IDENTITY.name, url: BASE_URL }],
  creator: IDENTITY.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: IDENTITY.name,
    title: `${IDENTITY.name} — Portfolio`,
    description: `${IDENTITY.role} focused on cybersecurity, AI security, automation, and applied machine learning.`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${IDENTITY.name} — Portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${IDENTITY.name} — Portfolio`,
    description: `${IDENTITY.role} focused on cybersecurity, AI security, automation, and applied machine learning.`,
    images: ["/twitter-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${space.variable} ${plex.variable} ${caveat.variable} font-sans bg-[#0d0f14] text-slate-100 antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js')` }} />
        <PersonJsonLd />
        <WebsiteJsonLd />
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
