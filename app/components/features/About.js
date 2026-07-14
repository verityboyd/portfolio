import Sparkle from "@/app/components/features/Sparkle";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row md:items-start md:justify-evenly justify-center items-center m-5 pt-10 pb-15"
    >
      <div className="flex flex-col max-w-lg">
        <h3 className="text-3xl m-2 pb-10 text-center font-semibold">About</h3>
        <p className="p-2 mt-2">
          Hello! I&apos;m Verity, an upcoming Software Development graduate at
          SAIT who loves blending creativity with code to create thoughtful,
          user-focused digital experiences.
        </p>
        <p className="p-2">
          I first discovered the joys of coding as a child while personalizing
          pet pages on Neopets.com in HTML and CSS. After a career detour
          through banking and the arts, I&apos;ve found my way back, with a
          deeper appreciation for how good digital tools can empower people and
          organizations.
        </p>
        <p className="p-2 mb-5">
          I&apos;ll be looking for opportunities starting August 2026, and
          I&apos;m excited to bring my <strong>curiosity</strong>,{" "}
          <strong>creativity,</strong> <strong>communication skills</strong>,
          and <strong>detail-oriented mindset</strong> into a development team
          that values modern solutions and client excellence.
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-3xl m-2 pb-10 text-center font-semibold">Skills</h3>
        <div>
          <div>
            <ul className="mt-2">
              <Sparkle skill="JavaScript" sparkleColour="text-[#A07CFE]" />
              <Sparkle skill="React" sparkleColour="text-[#FE8FB5]" />
              <Sparkle skill="Next.js" sparkleColour="text-[#A07CFE]" />
              <Sparkle skill="Tailwind CSS" sparkleColour="text-[#FE8FB5]" />
              <Sparkle skill="Java" sparkleColour="text-[#A07CFE]" />
              <Sparkle skill="Python" sparkleColour="text-[#FE8FB5]" />
              <Sparkle skill="SQL / PL/SQL" sparkleColour="text-[#A07CFE]" />
              <Sparkle skill="C#" sparkleColour="text-[#FE8FB5]" />
              <Sparkle skill="Git / GitHub" sparkleColour="text-[#A07CFE]" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
