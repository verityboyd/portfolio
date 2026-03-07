import Timeline from "@/app/components/features/Timeline";

export default function Resume() {
  return (
    <section className="flex flex-col justify-center items-center p-10">
      <h3 className="text-3xl m-2 pb-10">My Resume</h3>
      <ol className="relative space-y-8 before:absolute before:-ms-px before:h-full before:w-0.5 before:rounded-full before:bg-[#FE8FB5]">
        <Timeline
          circleColour="bg-[#A07CFE]"
          date="January 2025 - August 2026"
          title="SAIT Software Development Diploma"
          desc="Other key concepts here or potentially underneath. Fix colours and font size."
        />
        <Timeline
          circleColour="bg-[#FE8FB5]"
          date="January 2026 - August 2026"
          title="Calgary Opera Capstone Project"
          desc="Full-Stack application blah blah tech stack goes here."
        />
        <Timeline
          circleColour="bg-[#A07CFE]"
          date="July 2021 - October 2024"
          title="Box Office Manager"
          desc="Calgary Opera - maybe consider adding a subtitle for place of work before description. Using Barclays logo placeholder, fix later."
        />
        <Timeline
          circleColour="bg-[#FE8FB5]"
          date="May 2017(?) - July 2021"
          title="Essential Banker"
          desc="Barclays Bank UK. Many skills learned here, mostly soft but also extreme attention to detail and working under pressure. During COVID too."
        />
        {/*Resume here. Also add button (gradient w/ sparkle colours) to download
        PDF resume.*/}
      </ol>
    </section>
  );
}
