import ContactInfo from "@/components/contact-info";
import Javascript from "@/components/javascript";
import MaskDo from "@/components/mask-do";
import MaskJs from "@/components/mask-js";
import StackTecnology from "@/components/stack-tecnology";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const maskJSRef = useRef<HTMLDivElement>(null);
  const javaScriptRef = useRef<HTMLDivElement>(null);
  const stackTecnologyRef = useRef<HTMLDivElement>(null);
  const maskDOvaRef = useRef<HTMLDivElement>(null);
  const imageProjectRefs = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectsTitleRef = useRef<HTMLDivElement>(null);
  const contactContainerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
      tl.to(imageRef.current, { scale: 1, }, 0 );
      tl.to(maskJSRef.current, { maskSize: "clamp(20vh, 25%, 30vh)", WebkitMaskSize: "clamp(20vh, 25%, 30vh)", }, 0.15 );
      tl.to(imageRef.current, { opacity: 0, duration: 0.2 }, 0.4);
      tl.to(javaScriptRef.current, { opacity: 1, duration: 0.1, }, 0.6);
      tl.to(javaScriptRef.current, { opacity: 0, duration: 0.2 }, 0.9);
      tl.to(maskJSRef.current, { opacity: 0, duration: 0.2 }, 0.9);
      tl.to(stackTecnologyRef.current, { opacity: 1, duration: 0.3 }, 1);
      tl.to(stackTecnologyRef.current, { opacity: 0, duration: 0.3 }, 1.7);
      tl.to(maskDOvaRef.current, { opacity: 1, duration: 0.3 }, 1.8);
      tl.to(projectsRef.current, { pointerEvents: "auto" }, 1.8);
      tl.to(maskDOvaRef.current, { maskSize: "clamp(40vh, 50%, 60vh)", WebkitMaskSize: "clamp(40vh, 50%, 60vh)", }, 2.25);
      tl.to(projectsRef.current, { pointerEvents: "none" }, 2.5);
      tl.to(contactRef.current, { pointerEvents: "auto" }, 2.5);
      tl.to(imageProjectRefs.current, { opacity: 0, duration: 0.2 }, 2.5);
      tl.to(projectsTitleRef.current, { opacity: 0, duration: 0.2 }, 2.5);
      tl.to(contactContainerRef.current, { opacity: 1, duration: 0.1 }, 2.7);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen w-full ">
      <MaskJs
        aboutMeRef={aboutMeRef}
        imageRef={imageRef}
        maskJSRef={maskJSRef}
      />
      <Javascript javaScriptRef={javaScriptRef} />

      <StackTecnology stackTecnologyRef={stackTecnologyRef} />
      <MaskDo
        imageProjectRefs={imageProjectRefs}
        maskDOvaRef={maskDOvaRef}
        projectsRef={projectsRef}
        projectsTitleRef={projectsTitleRef}
      />
      <ContactInfo
        contactContainerRef={contactContainerRef}
        contactRef={contactRef}
      />
    </div>
  );
}
