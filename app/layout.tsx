import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joewilson.ai"),
  title: "Joe Wilson — AI-Native Customer Experience Operator",
  description:
    "AI-native customer experience operator. 25 years enterprise tech. Microsoft → Rapsodo. Built CS infrastructure solo with Claude Code as the engineering partner.",
  openGraph: {
    title: "Joe Wilson — AI-Native Customer Experience Operator",
    description:
      "Customer experience operator who codes with AI. Shipping at team scale, solo.",
    url: "https://joewilson.ai",
    siteName: "Joe Wilson",
    images: [
      {
        url: "/og-image.png", // TODO: generate 1200×630
        width: 1200,
        height: 630,
        alt: "Joe Wilson — AI-Native Customer Experience Operator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Wilson — AI-Native CX Operator",
    description: "Operator who codes with AI. Microsoft → Rapsodo. Available.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
