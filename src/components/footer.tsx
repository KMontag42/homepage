import Link from "next/link";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/70 bg-background/60 backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          Built in Maine.
        </p>
        <div className="flex items-center gap-1">
          <Link
            href="https://github.com/kmontag42"
            target="_blank"
            rel="noreferrer"
            aria-label="Kyle Montag on GitHub (opens in a new tab)"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            <SiGithub className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/thekylemontag"
            target="_blank"
            rel="noreferrer"
            aria-label="Kyle Montag on X (opens in a new tab)"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            <SiX className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
