import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Linkedin, Smartphone } from "lucide-react";
export default function Navbar() {
  return (
    <div className="flex gap-3 px-5 py-1 fixed top-0 z-50 h-14 items-center justify-between w-full ">
      <img src="/isotipo.png" alt="" className="object-contain w-10" />
      <div className="flex items-center">
        <a
          title="Github"
          className="px-3"
          href="https://github.com/OvallesDar"
          target="_blank"
        >
          <Github scale={1.5} />
        </a>
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <a
          title="LinkedIn"
          className="px-3"
          href="https://www.linkedin.com/in/darwin-ovalles-0127a8181/"
          target="_blank"
        >
          <Linkedin />
        </a>
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <a
          title="Instragram"
          className="px-3"
          href="https://www.instagram.com/ovallesdar/"
          target="_blank"
        >
          <Instagram />
        </a>
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <a
          title="WhatsApp"
          className="px-3"
          href="https://wa.me/34622083617"
          target="_blank"
        >
          <Smartphone />
        </a>
      </div>
    </div>
  );
}
