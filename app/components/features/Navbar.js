import { Separator } from "@/app/components/ui/separator";
//todo - make navbar fixed/sticky when scrolling
export default function Navbar() {
  return (
    <nav className="flex h-5 justify-center items-center gap-4 text-lg mt-5 mb-5">
      <div>Home</div>
      <Separator orientation="vertical" className="bg-[#A07CFE]" />
      <div>About</div>
      <Separator orientation="vertical" className="bg-[#FE8FB5]" />
      <div>Projects</div>
      <Separator orientation="vertical" className="bg-[#A07CFE]" />
      <div>Resume</div>
    </nav>
  );
}
