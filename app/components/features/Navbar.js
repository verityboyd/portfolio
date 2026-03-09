import { Separator } from "@/app/components/ui/separator";
import Link from "next/link";
//todo - make navbar fixed/sticky when scrolling
export default function Navbar() {
  return (
    <nav className="flex h-5 justify-center items-center gap-4 text-lg mt-5 mb-15">
      <Link href="#home">Home</Link>
      <Separator orientation="vertical" className="bg-[#A07CFE]" />
      <Link href="#about">About</Link>
      <Separator orientation="vertical" className="bg-[#FE8FB5]" />
      <Link href="#projects">Projects</Link>
      <Separator orientation="vertical" className="bg-[#A07CFE]" />
      <Link href="#resume">Resume</Link>
    </nav>
  );
}
