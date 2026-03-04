import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main>
      <header>
        <Navbar />
        <Header />
        <Separator className="max-w-7xl mx-auto bg-gradient-to-r from-[#A07CFE] to-[#FE8FB5]" />
      </header>
      <About />
      <Separator className="max-w-7xl mx-auto bg-gradient-to-r from-[#A07CFE] to-[#FE8FB5]" />
    </main>
  );
}
