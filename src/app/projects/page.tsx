import { TypographyH1, TypographyP } from "@/components/ui/typography";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-background/90 p-8 rounded border">
      <TypographyH1>Projects</TypographyH1>
      <TypographyP>Side projects I&apos;ve worked on recently.</TypographyP>
      <div className="flex flex-col space-y-4 mt-4 underline">
        <Link href="https://x.com/ethresearchbot" target="_blank">
          @ethresearchbot
        </Link>
        <Link href="https://x.com/arbitrumgovbot" target="_blank">
          @arbitrumgovbot
        </Link>
        <Link href="https://x.com/optimismgovbot" target="_blank">
          @optimismgovbot
        </Link>
        <Link href="https://analytica.gg" target="_blank">
          Analytica.gg
        </Link>
        <Link href="https://workrant.alwaysbeshipp.ing" target="_blank">
          Workrant
        </Link>
        <Link href="https://newsletter.alwaysbeshipp.ing" target="_blank">
          Always Be Shipping News
        </Link>
      </div>
    </div>
  );
}
