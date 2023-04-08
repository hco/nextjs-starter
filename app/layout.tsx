import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import logo from "../public/acmenet.png";

export const metadata: Metadata = {
  title: "Bold Video x Next.js Starterkit",
  description:
    "Power up your video content with Bold Video and the TNT stack (Next.js, TailwindCSS, and TypeScript). Get started with automatic encoding and transcription in minutes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              <Link className="hover:text-primary" href="/">Latest Videos</Link>
              <Link className="hover:text-primary" href="/">Onboarding</Link>
              <Link className="hover:text-primary" href="/">Acme Academy</Link>
              <Link className="hover:text-primary" href="/">Playlists</Link>
            </div>
            <div className="flex-1 flex justify-end">&nbsp;</div>
          </nav>
        </header>
        <main className="p-5 md:p-10">{children}</main>
      </body>
    </html>
  );
}
