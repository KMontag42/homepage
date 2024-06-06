import { TypographyH1, TypographyP } from "@/components/ui/typography";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <TypographyH1>Projects</TypographyH1>
      <TypographyP>Side projects I&apos;ve worked on recently.</TypographyP>
      <div className="flex flex-col space-y-4 mt-4 underline">
        <Link href="https://x.com/ethresearchbot" target="_blank">
          @ethresearchbot
        </Link>
        <Link href="https://atek.afkanalytica.com" target="_blank">
          AFKJourney Team Builder
        </Link>
      </div>
    </div>
  );
}
