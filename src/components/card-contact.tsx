import type { LucideIcon } from "lucide-react";

export default function CardContact({title, href, icon: Icon, description} : {title: string, href: string, icon: LucideIcon, description:string}) {
  return (
    <a
      title={title}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center rounded-full"
    >
      <Icon size={50} strokeWidth={1}/>
      <small>{description}</small>
    </a>
  );
}
