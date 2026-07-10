import { Separator } from "@/app/components/ui/separator";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      id="home"
      className="relative flex flex-wrap justify-center items-center gap-4 text-lg mt-5 mb-15 px-4"
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
      <Separator
        orientation="vertical"
        className="bg-[#FE8FB5] hidden sm:block"
      />

      <div className="sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2">
        <ThemeToggle />
      </div>
    </nav>
  );
}
