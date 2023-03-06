import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-1000 text-white">
        <header className="h-20 px-10 py-4 flex items-center justify-between">
          <nav>
            <h1>
              <Link href="/">
                <svg className="h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 909 249"><g fill="#03FFFF" fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path d="M688.442 249V11.421s46.472-5.907 97.275-5.907c102.789 0 123.268 71.68 123.268 135.482 0 38.64-11.538 79.873-37.962 108.004H688.442ZM673.319 249H486.231c-11.257-15.533-17.161-37.184-17.161-66.651V7.877h155.561v164.626l46.866-2.757L673.319 249ZM423.398 249H252.35c-23.876-25.07-37.703-63.238-37.703-112.731C214.647 53.169 267.419 0 338.702 0c72.464 0 122.48 53.169 122.48 136.269 0 49.493-14.045 87.661-37.784 112.731ZM0 249V7.877h121.299c52.379 0 74.827 27.569 74.827 61.045 0 26.388-8.271 46.474-25.599 59.471 29.143 7.876 43.321 35.445 43.321 67.74 0 18.839-3.953 38.046-16.924 52.867H0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h909v249H0z"/></clipPath></defs></svg>  
              </Link>
            </h1>
          </nav>
        </header>
        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
