import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | krm.sh",
  description:
    "About Kyle Montag and his work across data infrastructure, MEV, and AI.",
};

export default function About() {
  return (
    <article className="w-full max-w-3xl rounded-xl border bg-card/90 p-6 shadow-[0_24px_80px_-40px_hsl(var(--foreground)/0.3)] backdrop-blur-xl sm:p-10 lg:p-12">
      <header className="grid items-center gap-7 border-b pb-9 sm:grid-cols-[1fr_auto] sm:gap-12">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            I&apos;m Kyle.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            I&apos;m a Senior Data Engineer at Chainlink based in Maine. My
            professional work spans data infrastructure, MEV, and applied AI.
          </p>
        </div>
        <Image
          src="/me.jpg"
          alt="Kyle Montag"
          width={144}
          height={144}
          priority
          className="h-28 w-28 rounded-2xl border object-cover shadow-sm sm:h-36 sm:w-36"
        />
      </header>

      <section className="border-b py-9">
        <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Work
        </h2>
        <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
          <p>
            At Chainlink, I helped build{" "}
            <Link
              href="https://docs.chain.link/data-feeds/svr-feeds"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Smart Value Recapture (SVR)
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
            , with a particular focus on the searcher experience. That work
            involved making a technically complex MEV product practical and
            approachable for the people integrating with it.
          </p>
          <p>
            I&apos;ve also spent the past several years consulting on how AI can
            be applied across very different markets, from hedge funds to
            games. Across both areas, I&apos;m interested in turning emerging
            technology into systems and products people can actually use.
          </p>
        </div>
      </section>

      <section className="py-9">
        <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Away from work
        </h2>
        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
          Away from work, I spend time with my wife, our child, and our cat,
          tend my vegetable greenhouse and flower gardens, and build side
          projects. I&apos;m usually growing something, experimenting with a new
          idea, or shipping something that probably started as a joke.
        </p>
      </section>

      <footer className="flex flex-wrap gap-x-7 gap-y-3 border-t pt-6">
        <Link
          href="/projects"
          className="group inline-flex min-h-11 items-center font-medium outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
        >
          See what I&apos;m building
          <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
        <Link
          href="https://github.com/kmontag42"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex min-h-11 items-center font-medium text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
        >
          Find me on GitHub
          <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>
      </footer>
    </article>
  );
}
