import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Linkedin, Smartphone } from "lucide-react";
export default function Navbar() {
  const links = [
    {
      title: "Github",
      href: "https://github.com/OvallesDar",
      icon: Github,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/darwin-ovalles-0127a8181/",
      icon: Linkedin,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/ovallesdar/",
      icon: Instagram,
    },
    {
      title: "WhatsApp",
      href: "https://wa.me/34622083617",
      icon: Smartphone,
    },
  ];

  return (
    <div className="flex gap-3 px-5 py-1 fixed top-0 z-50 h-14 items-center justify-between w-full ">
      <img src="/isotipo.png" alt="" className="object-contain w-10" />
      <div className="flex items-center gap-2">
        {links.map(({ href, icon: Icon, title }, index) => (
          <div className="flex items-center gap-2">
            <a
              href={href}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon scale={1.5} />
            </a>
            {index !== links.length - 1 && (
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
