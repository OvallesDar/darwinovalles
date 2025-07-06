import { FileUser, Linkedin, Smartphone } from "lucide-react";
import { Description } from "./ui/portfolio";
import type { Ref } from "react";
import CardContact from "./card-contact";

const contactInfo = [
  {
    icon: FileUser,
    title: "Curriculum Vitae PDF",
    description: "CV",
    href: "/CV.pdf",
  },
  {
    icon: Smartphone,
    title: "WhatsApp",
    description: "WhatsApp",
    href: "https://wa.me/34622083617",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "LinkedIn",
    href: "https://www.linkedin.com/in/darwin-ovalles-0127a8181/",
  },
];

export default function ContactInfo({
  contactContainerRef,
  contactRef,
}: {
  contactContainerRef: Ref<HTMLDivElement>;
  contactRef: Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={contactContainerRef}
      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 pointer-events-none"
    >
      <div
        ref={contactRef}
        className="flex flex-col justify-center items-center relative w-full h-screen text-center "
      >
        <Description className="mt-5">Contáctame:</Description>
        <div className="flex gap-14 relative top-3">
          {contactInfo.map(({ icon, description, href, title }) => (
            <CardContact
              key={href}
              icon={icon}
              description={description}
              href={href}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
