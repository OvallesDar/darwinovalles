import type { Ref } from "react";
import CardProjects from "./card-projects";
import { Description, Title } from "./ui/portfolio";

export default function MaskDo({
  maskDOvaRef,
  imageProjectRefs,
  projectsTitleRef,
  projectsRef,
}: {
  maskDOvaRef: Ref<HTMLDivElement>;
  imageProjectRefs: Ref<HTMLDivElement>;
  projectsTitleRef: Ref<HTMLDivElement>;
  projectsRef: Ref<HTMLDivElement>;
}) {
  const projects = [
    {
      href: "https://www.belanovainc.com/",
      description: "Desarrollo Web",
      image: "/clientBelanova.png",
    },
    {
      href: "https://cafeterialauka.es/",
      description: "Desarrollo Web",
      image: "/clientCafeterieLauka.png",
    },
    {
      href: "https://ovatech.es/",
      description: "Desarrollo Web",
      image: "/isotipo.png",
    },
    {
      href: "https://esenciacanaria.ovatech.es/",
      description: "Aplicación Web",
      image: "/clientEsenciaCanaria.png",
    },
  ];

  return (
    <div ref={maskDOvaRef} className="absolute inset-0 opacity-0 transition-opacity duration-500 logo-mask2">
      <picture ref={imageProjectRefs} className="w-full h-screen">
        <img
          src="/projectsImage.webp"
          className="absolute w-full h-full object-cover"
          alt="Projects Image"
        />
      </picture>

      <div
        ref={projectsTitleRef}
        className="absolute inset-0 flex flex-col mt-40 landscape:mt-16 landscape:lg:mt-40 items-center text-center "
      >
        <Title>Proyectos</Title>
        <Description>
          Aquí encontrarás una selección de algunos proyectos en los que he
          trabajado.
        </Description>
        <div
          ref={projectsRef}
          className="flex gap-1 flex-wrap justify-center my-3 pointer-events-none"
        >
          {projects.map(({ href, description, image }) => (
            <CardProjects
              key={href}
              image={image}
              description={description}
              href={href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
