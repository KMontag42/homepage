import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="relative w-full max-w-3xl overflow-hidden rounded-xl border bg-card/85 p-6 shadow-[0_24px_80px_-40px_hsl(var(--foreground)/0.35)] backdrop-blur-xl sm:p-10 lg:p-12">
      <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm">
        Kyle Montag / Senior Data Engineer
      </p>
      <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-6xl">
        I build reliable data systems.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
        I&apos;m a Senior Data Engineer at Chainlink, based in Maine. My work
        spans reliable data infrastructure, MEV, and applied AI. I also build
        useful, occasionally strange, side projects.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="h-11 px-5">
          <Link href="/projects">
            View projects
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-11 px-5">
          <Link
            href="https://github.com/kmontag42"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </Button>
      </div>

      <div className="mt-9 flex items-center gap-3 border-t pt-5 text-sm text-muted-foreground">
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]"
          aria-hidden="true"
        />
        <span>
          Currently building data infrastructure at{" "}
          <Link
            href="https://chain.link"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Chainlink
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
          .
        </span>
      </div>
    </section>
  );
}
