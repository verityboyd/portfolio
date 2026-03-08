import Timeline from "@/app/components/features/Timeline";
import { Button } from "@/app/components/ui/button";

export default function Resume() {
  return (
    <section className="flex flex-col justify-center items-center p-10">
      <h3 className="text-3xl m-2 pb-15 font-semibold">My Resume</h3>
      <ol
        className="relative space-y-8 mx-auto 
        max-w-2xl before:absolute before:-ms-px before:h-full before:w-0.5 before:rounded-full before:bg-[#FE8FB5]"
      >
        <Timeline
          circleColour="bg-[#A07CFE]"
          date="January 2025 - August 2026 (Expected)"
          title="Software Development Diploma"
          employerAndPosition="Southern Alberta Institute of Technology"
          desc="Developed understanding in foundational concepts such as object-oriented programming, algorithms, databases, and UI/UX design."
        />
        <Timeline
          circleColour="bg-[#FE8FB5]"
          date="January 2026 - August 2026"
          title="Calgary Opera Archive - In Progress"
          employerAndPosition="SAIT Capstone Project"
          desc="Gathered user requirements, designed and built a full-stack web application - an inaugural living archive for a local non-profit arts org."
        />
        <Timeline
          circleColour="bg-[#A07CFE]"
          date="October 2025 - January 2026"
          title="Business Intelligence Analyst"
          employerAndPosition="Webster Consulting"
          desc="Cleaned and transformed enterprise application datasets, presented analytical findings using Excel and PowerPoint."
        />
        <Timeline
          circleColour="bg-[#FE8FB5]"
          date="October 2021 - October 2024"
          title="Box Office Manager"
          employerAndPosition="Calgary Opera"
          desc="Management of a busy Box Office, involving communication and interaction with a wide client demographic to the highest of standards, event planning and execution, sales data cleaning and analysis, technical documentation of procedures and back-end season creation in Tessitura CRM."
        />
        <Timeline
          circleColour="bg-[#A07CFE]"
          date="May 2017 - July 2021"
          title="Essential Banker"
          employerAndPosition="Barclays Bank UK"
          desc="Handling of sensitive and urgent client and business financial data, innovation of banking hall processes, extreme attention to detail and building of client relationships."
        />
      </ol>
      <div className="pt-15">
        <a href="/VBResume032026.pdf" target="_blank" rel="noopener noreferrer">
          <Button className="bg-linear-to-r from-[#A07CFE] to-[#FE8FB5] py-5 text-lg hover:scale-105 transition-transform">
            See Full Resume
          </Button>
        </a>
      </div>
    </section>
  );
}
