import type { Ref } from "react";
import { Description, SubTitle, Title } from "./ui/portfolio";

export default function MaskJs({
  aboutMeRef,
  imageRef,
  maskJSRef,
}: {
  aboutMeRef: Ref<HTMLDivElement>;
  imageRef: Ref<HTMLDivElement>;
  maskJSRef: Ref<HTMLDivElement>;
}) {
  return (
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
  );
}
