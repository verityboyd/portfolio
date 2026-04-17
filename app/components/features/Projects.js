import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center my-10">
      <h3 className="m-2 pb-10 text-3xl font-semibold">My Projects</h3>
      <div className="pt-5 pb-5 md:grid md:grid-cols-3 md:gap-8">
        <ProjectCard
          stack="React, Next.js, Tailwind CSS"
          title="Magic Monitor"
          description="SAIT Web Development 2 final project. A developed version of my previous wait times app, this full-stack application uses Firebase, Firestore and shadcn UI libraries to allow users to view and track Disney park ride wait times across the globe."
          imgAlt="A preview of the first page of the website"
          imgUrl="/assets/mmscreenshot.png"
          borderColor="#A07CFE"
          ghLink="https://github.com/verityboyd/magicmonitor"
          vercelLink="https://magicmonitor-vb.vercel.app/"
        />
        <ProjectCard
          stack="React, Next.js, Tailwind CSS"
          title="Happy Birthday, Mum!"
          description="A storybook-style trip down memory lane for my Mum's 64th birthday. Sent across the miles to give her a smile on the day. Built with React & Tailwind CSS."
          imgAlt="A preview of the first page of the website"
          imgUrl="/assets/mumbday.png"
          borderColor="#A07CFE"
          ghLink="https://github.com/verityboyd/mumbday"
          vercelLink="https://mumbday.vercel.app/"
        />
        <ProjectCard
          stack="React, Next.js, Tailwind CSS"
          title="Disneyland Paris Wait Times"
          description="A simple webpage made to practice API calls and display current wait times for a Disney park. Built with React and utilises Queue-Times.com API."
          imgAlt="A preview of the first page of the website"
          imgUrl="/assets/dlpwaittimes.png"
          borderColor="#FE8FB5"
          ghLink="https://github.com/verityboyd/dlpwaittimes"
          vercelLink="https://dlpwaittimes.vercel.app/"
        />
      </div>
    </section>
  );
}
