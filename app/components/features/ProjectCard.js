import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  imgAlt,
  vercelLink,
  ghLink,
  borderColor,
}) {
  return (
    <Card
      className="relative mx-auto w-full max-w-sm pt-0 rounded-lg overflow-hidden mb-5"
      style={{ borderColor }}
    >
      <Image
        src={imgUrl}
        alt={imgAlt}
        width={800}
        height={450}
        className="w-full aspect-video object-cover dark:brightness-40"
      />

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <div className="flex flex-row justify-center items-center gap-5 w-full">
          <Link href={vercelLink}>
            <Button className="bg-linear-to-r from-[#A07CFE] to-[#FE8FB5] hover:scale-105 transition-transform hover:cursor-pointer">
              Visit
            </Button>
          </Link>
          <Link href={ghLink}>
            <Button className="bg-linear-to-r from-[#A07CFE] to-[#FE8FB5]  hover:scale-105 transition-transform hover:cursor-pointer">
              GitHub
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
