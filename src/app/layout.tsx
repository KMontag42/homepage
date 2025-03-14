import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AnimatedStockBackground from "@/components/client/animated-chart-background";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "krm.sh",
  description: "The homepage for 0xKRM",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased min-h-screen p-4",
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex items-center justify-center min-h-[85vh]">
            <div className="absolute inset-0 -z-10">
              <AnimatedStockBackground />
            </div>

            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
