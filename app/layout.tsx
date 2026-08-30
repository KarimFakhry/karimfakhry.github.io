import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://karimfakhry.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Karim Fakhry — Product Design Portfolio",
  description:
    "Evidence-led product design and leadership case studies by Karim Fakhry, Product Design Manager.",
  openGraph: {
    title: "Karim Fakhry — Product Design Portfolio",
    description: "Product design leadership across healthcare, education, design systems and team operations.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Karim Fakhry — Product Design Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim Fakhry — Product Design Portfolio",
    description: "Product design leadership across healthcare, education, design systems and team operations.",
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
      <body>
        {children}
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"c1e11ed39ab44801aa030cf74509ed08"}'
        ></script>
      </body>
    </html>
  );
}
