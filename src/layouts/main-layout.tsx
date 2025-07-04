import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="mt-5 flex gap-3 px-5 py-1 fixed top-0 z-50 h-14 rounded-4xl items-center justify-between w-full ">
          <img src="/isotipo.png" alt="" className="object-contain w-10" />
          <div className="flex items-center">
            <a className="px-3" href="https://github.com/OvallesDar" target="_blank">
              <Github scale={1.5} />
            </a>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <a className="px-3" href="https://www.linkedin.com/in/darwin-ovalles-0127a8181/" target="_blank">
              <Linkedin />
            </a>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <a className="px-3" href="https://www.instagram.com/ovallesdar/" target="_blank">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
