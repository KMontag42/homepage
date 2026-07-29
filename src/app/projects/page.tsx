import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | krm.sh",
  description: "Personal projects and experiments built by Kyle Montag.",
};

const projects = [
  {
    number: "01",
    name: "Eth Research Bot",
    category: "Ethereum / AI",
    description:
      "An AI-powered bot that follows Ethereum research and publishes concise summaries of new discussions and proposals.",
    href: "https://x.com/ethresearchbot",
    action: "View on X",
  },
  {
    number: "02",
    name: "Workrant",
    category: "AI / Experiment",
    description:
      "A deliberately blunt AI tool that turns unprofessional workplace messages into something you can safely send.",
    href: "https://workrant.alwaysbeshipp.ing",
    action: "Try Workrant",
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-4xl rounded-xl border bg-card/90 p-6 shadow-[0_24px_80px_-40px_hsl(var(--foreground)/0.3)] backdrop-blur-xl sm:p-10 lg:p-12">
      <header className="max-w-2xl pb-9 sm:pb-12">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Selected projects
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Things I&apos;ve shipped.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Small tools and experiments I&apos;ve built around Ethereum, AI, and
          whatever seemed useful at the time.
        </p>
      </header>

      <div className="border-t">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group grid gap-4 border-b py-7 sm:grid-cols-[3rem_1fr_auto] sm:gap-6 sm:py-9"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {project.number}
            </span>
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {project.category}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.name}
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                {project.description}
              </p>
            </div>
            <Link
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center self-end font-medium outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring sm:self-center"
            >
              {project.action}
              <ArrowUpRight
                className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
