import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "Frank Huang",
  description: "Frank Huang's Portfolio"
}

export default function Home() {
  return (
    <div className="flex flex-col gap-5 flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* About */}
      <section className="p-10">
        <div className="flex gap-10">
          <div className="w-md">
            <h2 className="text-2xl">About</h2>
            <div>
              Hi, I'm Frank, a 2nd year Computer Science Student at the University of Toronto.
            </div>
          </div>
          <div className="relative w-lg aspect-video rounded-lg overflow-hidden">
            <Image fill={true} src="/squirrel.jpg" alt="Squirrel in Snow" className="object-cover"/>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl">Contact</h2>
        <p>Find me on</p>
        <div className="flex gap-3">
          <a href="https://github.com/IridescentSky"><FaGithub className="w-10 h-10"/></a>
          {/* TODO: Add Linkedin */}
          <a href=""><FaLinkedin className="w-10 h-10"/></a>
        </div>
      </section>
    </div>
  );
}
