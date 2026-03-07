import Image from "next/image";
import Link from "next/link";
import { SparklesText } from "@/app/components/ui/sparkles-text";
import { Icon } from "@iconify/react";

//todo - make sure animations are off for people who have reduced motion switch on. maybe change animations idk

export default function Header() {
  return (
    <section className="pb-10">
      <div className="md:flex md:flex-row flex flex-col items-center justify-center gap-x-10">
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
          <p className="m-4 text-lg text-center">
            An upcoming SAIT Software Development graduate inspired by projects
            that blend creativity, data and imagination.
          </p>
          <div className="flex flex-row items-center w-30 justify-between">
            <Link href="mailto:verityboyd@outlook.com">
              <Icon
                icon="memory:email"
                width="22"
                height="22"
                className="text-[#A07CFE] hover:scale-110 transition"
              />
            </Link>
            <Link href="https://github.com/verityboyd" target="_blank">
              <Icon
                icon="dinkie-icons:github"
                width="22"
                height="22"
                className="text-[#FE8FB5] hover:animate-spin"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/verityb/" target="_blank">
              <Icon
                icon="streamline-pixel:logo-linkedin"
                width="22"
                height="22"
                className="text-[#A07CFE] hover:animate-pulse"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
