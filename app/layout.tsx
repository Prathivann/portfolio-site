import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prithivan Raja — Finance & Analytics Portfolio",
  description:
    "Data analyst and aspiring finance professional bridging complex datasets and strategic decisions. MS Engineering Management at Northeastern University. CFA Level I Candidate.",
  openGraph: {
    title: "Prithivan Raja — Finance & Analytics Portfolio",
    description:
      "Finance + Analytics + Data + Technology. Portfolio analytics, investment research, and risk analytics.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prithivan Raja — Finance & Analytics Portfolio",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-bg-primary antialiased">{children}</body>
    </html>
  );
}
