import { TypographyH1, TypographyP } from '@/components/ui/typography';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <TypographyH1>About</TypographyH1>
      <TypographyP>
        I'm Kyle, a software engineer based in Boston.
      </TypographyP>
      <TypographyP>
        I'm currently working at <a href="https://www.salsify.com" target="_blank">Salsify</a> as a Senior Data Engineer.
      </TypographyP>
      <TypographyP>
        In my free time, I enjoy working on side projects, and spending time with my wife, our baby, and our cats.
      </TypographyP>
    </div>
  );
}
