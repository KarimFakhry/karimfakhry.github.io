import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://karim-fakhry-portfolio.kia0481.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Karim Fakhry — Product Design Portfolio",
  description:
    "Selected product design case studies by Karim Fakhry, Product Design Manager.",
  openGraph: {
    title: "Karim Fakhry — Product Design Portfolio",
    description: "Product design leadership across healthcare, education and digital platforms.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Karim Fakhry — Product Design Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim Fakhry — Product Design Portfolio",
    description: "Product design leadership across healthcare, education and digital platforms.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
