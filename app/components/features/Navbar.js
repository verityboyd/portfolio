import { Separator } from "@/app/components/ui/separator";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      id="home"
      className="flex h-5 justify-center items-center gap-4 text-lg mt-5 mb-15"
    >
      <Link href="#home" className="hover:scale-110">
        Home
      </Link>
      <Separator orientation="vertical" className="bg-[#A07CFE]" />
      <Link href="#about" className="hover:scale-110">
        About
      </Link>
      <Separator orientation="vertical" className="bg-[#FE8FB5]" />
      <Link href="#projects" className="hover:scale-110">
        Projects
      </Link>
      <Separator orientation="vertical" className="bg-[#A07CFE]" />
      <Link href="#resume" className="hover:scale-110">
        Resume
      </Link>
    </nav>
  );
}
