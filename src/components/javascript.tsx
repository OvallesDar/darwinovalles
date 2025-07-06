import type { Ref } from "react";
import { Description, Title } from "./ui/portfolio";

export default function Javascript({
  javaScriptRef,
}: {
  javaScriptRef: Ref<HTMLDivElement>;
}) {
  return (
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
          aplicaciones full stack. Estoy en constante aprendizaje y motivado por
          crear soluciones.
        </Description>
      </div>
    </div>
  );
}
