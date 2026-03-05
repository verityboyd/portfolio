import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="flex flex-col items-center my-10">
      <h3 className="m-2 pb-6 text-3xl">My Projects</h3>
      <div className="grid grid-cols-3 gap-8">
        <ProjectCard
          stack="Front-End"
          title="Happy Birthday, Mum!"
          description="A storybook-style trip down memory lane for my Mum's 64th birthday. Sent across the miles to give her a smile on the day. Built with React."
          imgAlt="A preview of the first page of the website"
          imgUrl="./assets/mumbday.png"
          borderColor="#A07CFE"
          ghLink="https://github.com/verityboyd/mumbday"
          vercelLink="https://mumbday.vercel.app/"
        />
        <ProjectCard
          stack="React"
          title="Disneyland Paris Wait Times"
          description="A simple webpage made to practice API calls and display current wait times for a Disney park. Built with React and utilises Queue-Times.com API."
          imgAlt="A preview of the first page of the website"
          imgUrl="./assets/dlpwaittimes.png"
          borderColor="#FE8FB5"
          ghLink="https://github.com/verityboyd/dlpwaittimes"
          vercelLink="https://dlpwaittimes.vercel.app/"
        />
        <ProjectCard
          stack="TBD"
          title="Coming Soon"
          description="Made to practice useState and useEffect."
          imgAlt="A preview of the first page of the website"
          imgUrl="./assets/dlpwaittimes.png"
          borderColor="#A07CFE"
          ghLink=""
          vercelLink=""
        />
      </div>
    </section>
  );
}
