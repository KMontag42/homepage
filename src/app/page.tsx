import { TypographyH1, TypographyLead, TypographyP } from "@/components/ui/typography";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <TypographyH1>krm.sh</TypographyH1>
      <TypographyLead>The homepage for 0xkrm</TypographyLead>
      <TypographyP>I'm Kyle, a software engineer based in Boston.</TypographyP>
    </div>
  );
}
