import Link from "next/link";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer className="sticky top-full">
      <div className="flex justify-center space-x-4">
        <Link href="https://github.com/kmontag42" target="_blank">
          <SiGithub />
        </Link>
        <Link href="https://x.com/thekylemontag" target="_blank">
          <SiX />
        </Link>
      </div>
    </footer>
  );
}
