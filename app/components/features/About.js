import Sparkle from "@/app/components/features/Sparkle";

export default function About() {
  return (
    <section className="flex flex-row justify-evenly m-5 pt-5 pb-15">
      <div className="flex flex-col">
        <h3 className="text-3xl m-2 pb-4">About</h3>
        <p>Bio goes here</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-3xl m-2 pb-4">Skills</h3>
        <ul>
          <Sparkle skill="Skill 1" sparkleColour="text-[#A07CFE]" />
          <Sparkle skill="Skill 2" sparkleColour="text-[#FE8FB5]" />
          <Sparkle skill="Skill 3" sparkleColour="text-[#A07CFE]" />
          <Sparkle skill="Skill 4" sparkleColour="text-[#FE8FB5]" />
        </ul>
      </div>
    </section>
  );
}
