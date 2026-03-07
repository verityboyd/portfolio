import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { Separator } from "@/components/ui/separator";
import Footer from "./components/Footer";

//todo- make all components responsive on big/little screens etc
//- make nav navigate
//ensure accessibility, ensure light and dark mode everywhere works
//add little pop up thing in bottom right hand corner to push you back to top of page?
//add contact form at the bottom?
//todo - put all components in one folder, ui and features

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
