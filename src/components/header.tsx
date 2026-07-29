"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSelector from "@/components/theme-selector";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 border-b border-border/70 bg-background/70 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-16 w-full max-w-6xl items-center gap-1 px-3 sm:gap-2 sm:px-8"
      >
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="mr-auto inline-flex min-h-11 items-center rounded-md px-2 font-mono text-sm font-medium tracking-tight outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
        >
          krm.sh
        </Link>
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-md px-2.5 text-sm font-medium outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring sm:px-3",
                isActive && "bg-accent text-accent-foreground",
              )}
            >
              {item.label}
            </Link>
          );
        })}
        <ThemeSelector />
      </nav>
    </header>
  );
}
