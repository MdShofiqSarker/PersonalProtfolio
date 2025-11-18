import React, { useEffect, useState } from "react";
import { FaGithub, FaFacebook, FaWhatsapp, FaDownload } from "react-icons/fa";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("./data/ProtfolioData.json")
      .then((res) => res.json())
      .then((data) => setAbout(data.about))
      .catch((err) => console.error("Failed to load about data:", err));
  }, []);

  if (!about) return null;

  return (
    <section id="about" className="py-20 lg:h-screen bg-[#03091a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-blue-400 text-xl font-semibold tracking-wide">
            {about.title}
          </h3>
          <h2 className="text-4xl font-bold mt-2">{about.subtitle}</h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={about.image}
              alt={about.name}
              className="rounded-2xl shadow-2xl w-full max-w-sm hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              I'm {about.name}
            </h3>
            <p className="text-blue-200 mb-4 font-semibold">
              A {about.role} specialized in {about.availability}
            </p>
            <p className="text-blue-100 leading-relaxed mb-3">
              {about.description}
            </p>

            {/* Key Points */}
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-white mb-2">
                All About Me
              </h4>
              <ul className="list-disc list-inside text-blue-100 space-y-1">
                {about.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Hobby/Extra */}
            <p className="mt-4 text-blue-100">{about.hobbies}</p>

            {/* Resume Button */}
            <a
              href={about.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-3 rounded-xl shadow-lg transition duration-300"
            >
              <FaDownload /> Download Resume
            </a>

            {/* Social Links */}
            <div className="mt-8 flex space-x-6">
              <a
                href={about.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 text-2xl transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href={about.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 text-2xl transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href={about.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 text-2xl transition-colors duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
