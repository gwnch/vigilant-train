import type { Metadata } from "next";
import "./globals.css";
import "./updates.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const image = `${siteUrl}${basePath}/og.png`;
const title = "Margin Notes | A Cybersecurity Field Notebook";
const description = "Exploring how vulnerabilities become risk, how controls become programs, and how security decisions scale across an enterprise.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: `${basePath}/favicon.png`, shortcut: `${basePath}/favicon.png` },
  openGraph: { title, description, images: [image], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
