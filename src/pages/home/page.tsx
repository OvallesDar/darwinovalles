import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const maskRef = useRef(null);
  const afterMaskRef = useRef(null);
  const newSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 1,
          pin: true,
        },
      });

      tl.to(
        titleRef.current,
        {
          opacity: 0,
        },
        0
      );

      tl.to(
        imageRef.current,
        {
          scale: 1,
        },
        0
      );

      tl.to(
        maskRef.current,
        {
          maskSize: "clamp(20vh, 25%, 30vh)",
          WebkitMaskSize: "clamp(20vh, 25%, 30vh)",
        },
        0.15
      );

      tl.to(imageRef.current, { opacity: 0, duration: 0.2 }, 0.4);

      tl.to(
        afterMaskRef.current,
        {
          opacity: 1,
          duration: 0.1,
        },
        0.6
      );
      tl.to(afterMaskRef.current, { opacity: 0, duration: 0.2 }, 0.80);
      tl.to(maskRef.current, { opacity: 0, duration: 0.2 }, 0.80);
      tl.to(newSectionRef.current, { opacity: 1, duration: 0.3 }, 0.95);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={sectionRef} className="relative h-screen w-full ">
        <div ref={maskRef} className="w-full h-screen relative logo-mask">
          <picture
            ref={imageRef}
            className="h-screen scale-125 block overflow-hidden"
          >
            <img
              src="/heroKeyArt.webp"
              className="absolute w-full h-full object-cover"
              alt="Hero"
            />
          </picture>

          <div className="absolute inset-0 flex flex-col">
            <div
              ref={titleRef}
              className="flex flex-col px-2 pt-20 md:px-20 md:pt-36 md:w-2/3 z-40"
            >
              <h1 className="text-[10vw] md:text-[3vw] font-bold text-background-gradient">
                Darwin Ovalles
              </h1>

              <p className="text-[7.8vw] md:text-[2.8vw]">Web Development</p>
              <p className="text-[4vw] md:text-[1.5vw] mt-1">
                Me gusta crear aplicaciones funcionales y modernas, siempre
                aprendiendo y mejorando mi código.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={afterMaskRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 z-20"
        >
          <div className="flex flex-col justify-center items-center relative w-full h-screen text-center">
            <img
              src="/heroKeyArt_mobile.webp"
              alt=""
              className="absolute w-4/6 sm:w-3/6 md:w-1/3 md:right-0 bottom-0"
            />
            <h2 className="text-[8vw] md:text-[3vw] font-bold">¡JavaScript!</h2>
            <p className="text-[4vw] md:text-[1.5vw] mt-4 w-full md:w-1/2 px-3">
              Soy desarrollador web con enfoque en JavaScript. Trabajo con
              tecnologías como React, Next.js, Node y MongoDB para crear
              aplicaciones full stack. Estoy en constante aprendizaje y motivado
              por crear soluciones.
            </p>
          </div>
        </div>

        <div
          ref={newSectionRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 z-0"
        >
          <div className="flex flex-col justify-center items-center w-full h-screen text-center px-4">
            <h2 className="text-[8vw] md:text-[3vw] font-bold">
              Stack Tecnológico
            </h2>
            <p className="text-[4vw] md:text-[1.5vw] mt-4 w-full md:w-1/2">
              Trabajo con tecnologías como React, Next.js, Node.js y MongoDB.
              Aquí te muestro algunas de ellas.
            </p>
            <div className="flex gap-4 mt-6 flex-wrap justify-center">
              <img src="/tech/react.svg" alt="React" className="w-12 md:w-16" />
              <img
                src="/tech/nextjs.svg"
                alt="Next.js"
                className="w-12 md:w-16"
              />
              <img
                src="/tech/nodejs.svg"
                alt="Node.js"
                className="w-12 md:w-16"
              />
              <img
                src="/tech/mongodb.svg"
                alt="MongoDB"
                className="w-12 md:w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
