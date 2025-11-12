import React from "react";
import { FaGithub, FaFacebook, FaWhatsapp, FaArrowRight, FaDownload } from "react-icons/fa";
import data from "../../public/data/ProtfolioData.json";

export default function Banner() {
  const about = data.about;

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#03091a] via-[#041436] to-[#010d1f] text-white py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left Text Area */}
        <div className="space-y-5">
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Welcome To My Portfolio
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-blue-500">{about.name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300">
            {about.role}
          </h2>

          <p className="text-blue-100 max-w-lg leading-relaxed">
            Passionate about building responsive, modern web interfaces with clean code and exceptional user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-medium shadow-lg transition duration-300"
            >
              Hire Me <FaArrowRight />
            </a>

            <a
              href={about.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-blue-400 hover:bg-blue-500 hover:text-white text-blue-300 px-5 py-3 rounded-xl font-medium transition duration-300"
            >
              <FaDownload /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5 mt-6">
            <a
              href={about.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-300 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href={about.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-300 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href={about.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-300 transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 blur-lg opacity-25 rounded-full animate-pulse"></div>
          <img
            src={about.image}
            alt={about.name}
            className="relative rounded-lg w-72 h-72 object-cover shadow-2xl border-4 border-blue-500 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Subtle Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl top-10 left-[-5rem] animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl bottom-10 right-[-6rem] animate-pulse"></div>
      </div>
    </section>
  );
}
