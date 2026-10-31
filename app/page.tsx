import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "Frank Huang",
  description: "Frank Huang's Portfolio"
}

export default function Home() {
  return (
    <div className="flex-1 min-h-0 flex flex-row-reverse">
      <section className="relative w-xl h-full min-h-0 overflow-hidden">
        <Image fill={true} src="/Alley.jpg" alt="Alleyway with bright signs at night" className="object-cover"/>
      </section>
      <section className="flex-1 h-full flex items-center justify-center font-sans">
        <div className="w-2xl">
          {/* About */}
          <section className="p-10">
            <h2 className="text-8xl">Frank Huang</h2>
            <div>
              Hi, I'm Frank, a 2nd year Computer Science Student at the University of Toronto.
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
      </section>
    </div>
  );
}
