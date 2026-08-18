import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "./lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Keep the Door Locked Wiki", template: "%s | Keep the Door Locked Wiki" },
  description: "Fact-checked beginner guides for Keep the Door Locked [Anomaly] on Roblox.",
  applicationName: "Keep the Door Locked Wiki",
  authors: [{ name: "Keep the Door Locked Wiki editors" }],
  creator: "Keep the Door Locked Wiki editors",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website", siteName: "Keep the Door Locked Wiki", locale: "en_US",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Keep the Door Locked beginner survival guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#0b0f15", colorScheme: "dark" };

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Keep the Door Locked Wiki",
  url: SITE_URL,
  description: "A fan-made, fact-checked beginner guide for Keep the Door Locked [Anomaly].",
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }} />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
