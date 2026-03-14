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
  metadataBase: new URL("https://giraffegraph.io"),
  title: "GiraffeGraph — AI-Powered Knowledge Graph Platform",
  description:
    "Turn raw text into a living knowledge graph. AI extracts. You control. Graph grows. Schema-driven, versioned, queryable — built for story universes, research, and enterprise knowledge.",
  keywords: [
    "knowledge graph",
    "AI extraction",
    "Neo4j",
    "schema studio",
    "narrative intelligence",
    "entity resolution",
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
    title: "GiraffeGraph — From Raw Text to a Living Knowledge Graph",
    description:
      "Define your schema. Upload your data. Let AI extract entities, relations, and events — then watch your knowledge graph grow.",
    type: "website",
    url: "https://giraffegraph.io",
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
    title: "GiraffeGraph — From Raw Text to a Living Knowledge Graph",
    description:
      "Define your schema. Upload your data. Let AI extract entities, relations, and events — then watch your knowledge graph grow.",
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
