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
      <header>
        <h1 className="text-5xl lg:text-7xl mb-12">
            Hi! I'm Frank Huang
        </h1>
      </header>

      {/* About */}
      <section>
        <h2 className="text-2xl">About</h2>
        <div>
          I'm a student at the University of Toronto, studying computer science. I like dabbling in various CS and STEM-related things,
          and you can see what I'm working on in my project gallery and blogs :D. Currently, I'm learning about ____
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
