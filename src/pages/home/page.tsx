import CardProjects from "@/components/card-projects";
import CardSkill from "@/components/card-skill";
import { Description, SubTitle, Title } from "@/components/ui/portfolio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileUser, Linkedin, Smartphone } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const aboutMeRef = useRef(null);
  const imageRef = useRef(null);
  const maskJSRef = useRef(null);
  const javaScriptRef = useRef(null);
  const stackTecnologyRef = useRef(null);
  const maskDOvaRef = useRef(null);
  const imageProjectRefs = useRef(null);
  const projectsRef = useRef(null);
  const projectsTitleRef = useRef(null);
  const contactContainerRef = useRef(null);
  const contactRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=5000",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(aboutMeRef.current, { opacity: 0 }, 0);

      tl.to(
        imageRef.current,
        {
          scale: 1,
        },
        0
      );

      tl.to(
        maskJSRef.current,
        {
          maskSize: "clamp(20vh, 25%, 30vh)",
          WebkitMaskSize: "clamp(20vh, 25%, 30vh)",
        },
        0.15
      );

      tl.to(imageRef.current, { opacity: 0, duration: 0.2 }, 0.4);

      tl.to(
        javaScriptRef.current,
        {
          opacity: 1,
          duration: 0.1,
        },
        0.6
      );
      tl.to(javaScriptRef.current, { opacity: 0, duration: 0.2 }, 0.9);
      tl.to(maskJSRef.current, { opacity: 0, duration: 0.2 }, 0.9);
      tl.to(stackTecnologyRef.current, { opacity: 1, duration: 0.3 }, 1);
      tl.to(stackTecnologyRef.current, { opacity: 0, duration: 0.3 }, 1.7);

      tl.to(maskDOvaRef.current, { opacity: 1, duration: 0.3 }, 1.8);
      tl.to(projectsRef.current, { pointerEvents: "auto" }, 1.8);
      tl.to(
        maskDOvaRef.current,
        {
          maskSize: "clamp(40vh, 50%, 60vh)",
          WebkitMaskSize: "clamp(40vh, 50%, 60vh)",
        },
        2.25
      );
      tl.to(projectsRef.current, { pointerEvents: "none" }, 2.5);
      tl.to(contactRef.current, { pointerEvents: "auto" }, 2.5);

      tl.to(imageProjectRefs.current, { opacity: 0, duration: 0.2 }, 2.5);
      tl.to(projectsTitleRef.current, { opacity: 0, duration: 0.2 }, 2.5);
      tl.to(contactContainerRef.current, { opacity: 1, duration: 0.1 }, 2.7);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={sectionRef} className="relative h-screen w-full ">
        <div ref={maskJSRef} className="w-full h-screen relative logo-mask">
          <picture
            ref={imageRef}
            className="h-screen scale-125 block overflow-hidden"
          >
            <img
              src="/aboutMeImage.webp"
              className="absolute w-full h-full object-cover"
              alt="About Me Image"
            />
          </picture>

          <div className="absolute inset-0 flex flex-col">
            <div
              ref={aboutMeRef}
              className="flex flex-col px-2 pt-20 md:px-20 md:pt-28"
            >
              <div>

              <Title className="text-background-gradient">Darwin Ovalles</Title>
              </div>

              <SubTitle>Web Development</SubTitle>
              <Description className="mt-1 landscape:w-1/3">
                Me gusta crear aplicaciones funcionales y modernas, siempre
                aprendiendo y mejorando mi código.
              </Description>
            </div>
          </div>
        </div>

        <div
          ref={javaScriptRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500"
        >
          <div className="flex flex-col justify-center items-center relative w-full h-screen text-center">
            <img
              src="/javaScriptImage.webp"
              alt="JavaScript Image"
              className="absolute w-4/6 sm:w-3/6 md:w-1/3 landscape:w-1/5 landscape:right-5 bottom-0"
            />
            <Title className="landscape:mt-3">¡JavaScript!</Title>
            <Description className="mt-4 w-full md:w-3/4 px-3">
              Soy desarrollador web con enfoque en JavaScript. Trabajo con
              tecnologías como React, Next.js, Node y MongoDB para crear
              aplicaciones full stack. Estoy en constante aprendizaje y motivado
              por crear soluciones.
            </Description>
          </div>
        </div>

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

        <div ref={maskDOvaRef} className="absolute inset-0 opacity-0 logo-mask2">
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
        <div
          ref={contactContainerRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 pointer-events-none"
        >
          <div
            ref={contactRef}
            className="flex flex-col justify-center items-center relative w-full h-screen text-center "
          >
            <Description className="">Contáctame:</Description>
            <div className="flex gap-14">
              <a
                download
                href="/CV.pdf"
                title="Curriculum Vitae PDF"
                className="flex flex-col items-center justify-center rounded-full "
              >
                <FileUser size={50} />
                <small>CV</small>
              </a>
              <a
                title="WhatsApp"
                target="_blank"
                href="https://wa.me/34622083617"
                className="flex flex-col items-center justify-center rounded-full"
              >
                <Smartphone size={50} />
                <small>WhatsApp</small>
              </a>
              <a
                title="LinkedIn"
                href="https://www.linkedin.com/in/darwin-ovalles-0127a8181/"
                target="_blank"
                className="flex flex-col items-center justify-center rounded-full"
              >
                <Linkedin size={50} />
                <small>LinkedIn</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
