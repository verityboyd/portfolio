import Header from "@/app/components/features/Header";
import Navbar from "@/app/components/features/Navbar";
import About from "@/app/components/features/About";
import Projects from "@/app/components/features/Projects";
import Resume from "@/app/components/features/Resume";
import { Separator } from "@/app/components/ui/separator";
import Footer from "@/app/components/features/Footer";

//ensure accessibility, ensure light and dark mode everywhere works
//add little pop up thing in bottom right hand corner to push you back to top of page. material ui fab?
//add scale or underline or some sort of hover effect to navbar links when hovered or clicked.
//fix projects nav

export default function Page() {
  return (
    <main>
      <header>
        <Navbar />
        <Header />
        <Separator className="max-w-7xl mx-auto bg-linear-to-r from-[#A07CFE] to-[#FE8FB5]" />
      </header>
      <About />
      <Separator className="max-w-7xl mx-auto bg-linear-to-r from-[#A07CFE] to-[#FE8FB5]" />
      <Projects />
      <Separator className="max-w-7xl mx-auto bg-linear-to-r from-[#A07CFE] to-[#FE8FB5]" />
      <Resume />
      <Separator className="max-w-7xl mx-auto bg-linear-to-r from-[#A07CFE] to-[#FE8FB5]" />
      <Footer />
    </main>
  );
}
