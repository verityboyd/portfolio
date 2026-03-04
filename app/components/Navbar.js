import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <div className="flex h-5 justify-center items-center gap-4 text-lg mt-5 mb-5">
      <div>About</div>
      <Separator orientation="vertical" className="bg-[#A07CFE]" />
      <div>Projects</div>
      <Separator orientation="vertical" className="bg-[#FE8FB5]" />
      <div>Resume</div>
      <Separator orientation="vertical" className="bg-[#A07CFE]" />
      <div>Contact</div>
    </div>
  );
}
