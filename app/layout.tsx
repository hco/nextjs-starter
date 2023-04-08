import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import logo from "../public/acmenet.png";
import { bold } from "@/client";

export const metadata: Metadata = {
  title: "Bold Video x Next.js Starterkit",
  description:
    "Power up your video content with Bold Video and the TNT stack (Next.js, TailwindCSS, and TypeScript). Get started with automatic encoding and transcription in minutes.",
    openGraph: {
    title: 'Bold Video x Next.js Starterkit',
    description: 'Power up your video content with Bold Video and the TNT stack (Next.js, TailwindCSS, and TypeScript). Get started with automatic encoding and transcription in minutes.',
    url: 'https://starter-demo.wearebold.af',
    siteName: 'Bold Video x Next.js Starterkit',
    images: [
      {
        url: 'https://starter-demo.wearebold.af/og-static.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: settings } = await bold.settings();
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <header className=" px-5 md:px-10 py-4">
          <nav className="flex items-center justify-between ">
            <h1 className="flex-1">
              <Link href="/">
                <Image src={logo} alt="acmenet Mediahub" height="78" />
              </Link>
            </h1>
            <div className="flex font-semibold text-lg px-3 gap-6">
              {settings.menu_items.map(item => <Link className="hover:text-primary" key={item.url} href={item.url}>{item.label}</Link>)}
            </div>
            <div className="flex-1 flex justify-end">&nbsp;</div>
          </nav>
        </header>
        <main className="p-5 md:p-10">{children}</main>
      </body>
    </html>
  );
}
