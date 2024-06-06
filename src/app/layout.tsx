import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "krm.sh",
  description: "The homepage for 0xkrm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("container bg-background dark font-sans antialiased min-h-screen p-4", inter.className)}>
        <header className="sticky top-0">
          <nav className="flex justify-end space-x-4">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </nav>
          <Separator className="my-4" />
        </header>
        <main>
          {children}
        </main>
        <footer className="sticky top-full">
          <Separator className="my-4" />
          <div className="flex justify-center space-x-4">
            <Link href="https://github.com/kmontag42" target="_blank">GitHub</Link>
            <Link href="https://x.com/thekylemontag" target="_blank">Twitter</Link>
            <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
