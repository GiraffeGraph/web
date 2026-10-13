import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giraffegraph.com"),
  alternates: { canonical: "/" },
  title: "GiraffeGraph — Open-Source Human-in-the-Loop Knowledge Graph Engine",
  description:
    "An open-source engine where LLMs propose knowledge graph facts and humans verify them — built to prevent hallucination and schema drift. First case study: hadith isnad chains.",
  keywords: [
    "knowledge graph",
    "human-in-the-loop",
    "LLM hallucination",
    "schema drift",
    "hadith isnad",
    "entity resolution",
    "open source",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "180x180" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "GiraffeGraph — LLMs Propose. Humans Verify.",
    description:
      "Open-source human-in-the-loop knowledge graph engine against hallucination and schema drift. First case study: hadith isnad chains.",
    type: "website",
    url: "https://giraffegraph.com",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "GiraffeGraph",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "GiraffeGraph — LLMs Propose. Humans Verify.",
    description:
      "Open-source human-in-the-loop knowledge graph engine against hallucination and schema drift. First case study: hadith isnad chains.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
