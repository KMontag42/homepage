import Link from "next/link";
import { Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ThemeSelector from "@/components/theme-selector";

export default function Header() {
  return (
    <header className="top-0">
      <nav className="flex justify-end items-center space-x-4">
        <ThemeSelector className="absolute left-4"/>
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
