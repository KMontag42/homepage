import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AnimatedStockBackground from "@/components/client/animated-chart-background";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "krm.sh",
  description:
    "Kyle Montag is a Senior Data Engineer working across data infrastructure, MEV, and AI.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh bg-background font-sans antialiased",
          sans.variable,
          mono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative isolate grid min-h-dvh grid-rows-[auto_1fr_auto] overflow-hidden">
            <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
              <div className="data-grid absolute inset-0 opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,hsl(var(--primary)/0.10),transparent_38%)]" />
              <div className="absolute inset-y-[12%] -right-[15%] w-[75%] opacity-60 sm:right-0 sm:w-[62%]">
                <AnimatedStockBackground />
              </div>
            </div>
            <Header />
            <main className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-5 py-12 sm:px-8 sm:py-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
