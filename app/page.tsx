import Link from "next/link";
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
      <section className="relative max-md:hidden md:w-xs lg:w-lg xl:w-3xl h-full min-h-0 overflow-hidden">
        <Image fill={true} 
          src="/Alley.jpg" 
          alt="Alleyway with bright signs at night" 
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 20rem, (max-width: 1279px) 32rem, 48rem"
        />
      </section>

      <section className="flex-1 h-full flex flex-col font-sans">
        {/* Header */}
        <section className="px-5 sm:px-10 md:pl-14 md:pr-8 pt-10 mb-6">
          <h1 className=" text-5xl lg:text-6xl xl:text-8xl mb-2">Frank Huang</h1>
          <h2 className="text-lg lg:text-2xl">2nd Year Computer Science @ UofT</h2>
        </section>

        <section className="px-5 sm:px-10 md:pl-14 md:pr-8 md:max-w-2xl">
          {/* About */}
          <section className="lg:text-md xl:text-lg">
            <h2 className="font-semibold mb-2">About Me</h2>
            <div>
              <p>Hi! I’m a 2nd year student at the University of Toronto pursuing a Computer Science Specialist. I especially enjoy learning about robotics and DSA algorithms.</p>
              <br/>
              <p>Outside of school, I like photography, keeping up with transit news, and exploring parks and subway stations around Toronto.</p>
            </div>

            {/* Contact */}
            <section className="mt-5">
              <div className="flex gap-3">
                <button className="bg-[#1B3B5A] text-white px-3 py-1"><a href="/resume_portfolio.pdf">Resume</a></button>
                <button className="bg-[#1B3B5A] text-white px-2 py-1"><a href="https://github.com/IridescentSky"><FaGithub className="w-8 h-8"/></a></button>
                {/* TODO: Add Linkedin */}
                <button className="bg-[#1B3B5A] text-white px-2 py-1"><a href="https://www.linkedin.com/in/frankhuang132/"><FaLinkedin className="w-8 h-8"/></a></button>
              </div>
            </section>

            {/* Links */}
            <section className="mt-5 flex flex-col underline text-2xl gap-2">
              <Link href="/Projects">Projects</Link>
              <Link href="/Blog">Blog</Link>
            </section>

            {/* Image for mobile */}
            <section className="md:hidden pt-6 pb-5 flex justify-center">
              <div className="relative w-xs h-100 min-h-0 overflow-hidden">
                <Image 
                  fill={true} 
                  src="/Alley.jpg" 
                  alt="Alleyway with bright signs at night" 
                  className="object-cover"
                  sizes="(max-width: 319px) 100vw, 320px"
                />
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
