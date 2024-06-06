import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="sticky top-full">
      <Separator className="my-4" />
      <div className="flex justify-center space-x-4">
        <Link href="https://github.com/kmontag42" target="_blank">
          GitHub
        </Link>
        <Link href="https://x.com/thekylemontag" target="_blank">
          Twitter
        </Link>
        <Link href="https://linkedin.com" target="_blank">
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
