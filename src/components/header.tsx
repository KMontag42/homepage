import Link from "next/link";
import { Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className="sticky top-0">
      <nav className="flex justify-end space-x-4">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/">
          <Home />
        </Link>
      </nav>
      <Separator className="my-4" />
    </header>
  );
}
