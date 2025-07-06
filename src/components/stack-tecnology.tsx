import type { Ref } from "react";
import { Description, Title } from "./ui/portfolio";
import CardSkill from "./card-skill";

const skills = [
  {
    title: "HTML",
    image: "/html.svg",
  },
  {
    title: "CCS",
    image: "/ccss.svg",
  },
  {
    title: "JS",
    image: "/javascript.svg",
  },
  {
    title: "TS",
    image: "/typescript.svg",
  },
  {
    title: "React",
    image: "/react.svg",
  },
  {
    title: "Vite Js",
    image: "/vitejs.svg",
  },
  {
    title: "Redux",
    image: "/redux.svg",
  },
  {
    title: "NodeJS",
    image: "/nodejs.webp",
  },
  {
    title: "Express",
    image: "/express.webp",
  },
  {
    title: "NextJS",
    image: "/nextjs.svg",
  },
  {
    title: "MongoDB",
    image: "/mongodb.svg",
  },
  {
    title: "Prisma",
    image: "/prisma.svg",
  },
  {
    title: "Tailwind",
    image: "/tailwind.svg",
  },
  {
    title: "ShadCN",
    image: "/shadcn.png",
  },
  {
    title: "MaterialUI",
    image: "/materialui.svg",
  },
  {
    title: "Bootstrap",
    image: "/bootstrap.svg",
  },
];

export default function StackTecnology({
  stackTecnologyRef,
}: {
  stackTecnologyRef: Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={stackTecnologyRef}
      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 z-0"
    >
      <div className="flex flex-col justify-center items-center w-full h-screen text-center px-4">
        <Title>Stack Tecnológico</Title>
        <Description className="mt-4 w-full md:w-1/2">
          A lo largo de mis proyectos he trabajado con diversas tecnologías.
          Estas son algunas de las herramientas que conozco y he utilizado.
        </Description>
        <div className="flex gap-1  mt-6 flex-wrap justify-center">
          {skills.map(({ title, image }) => (
            <CardSkill key={title} image={image} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
