import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <section>
      <div className="flex flex-row items-center justify-center gap-x-10">
        <Image
          src="/assets/profile5.jpg"
          alt="An image of Verity (the author of this page) smiling in a cafe."
          height={250}
          width={250}
          className="m-10 rounded-full"
        />
        <div className="flex flex-col justify-center items-center">
          <SparklesText className="text-[#2A2A2A] m-4">
            Verity Boyd
          </SparklesText>
          <h2 className="text-2xl">Software Development Student</h2>
          <p className="m-4 text-lg">
            An upcoming SAIT Software Development graduate inspired by projects
            that blend creativity, data and imagination.
          </p>
        </div>
      </div>
    </section>
  );
}
