import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <TypographyH1>krm.sh</TypographyH1>
      <TypographyLead>The homepage for 0xKRM</TypographyLead>
      <Image
        src="/me.jpg"
        alt="0xKRM"
        width={200}
        height={200}
        className="rounded-full mt-8"
      />
    </div>
  );
}
