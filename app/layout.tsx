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
          Bold
        </header>
        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
