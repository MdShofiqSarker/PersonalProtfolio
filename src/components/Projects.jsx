import React from "react";
import data from "../../public/data/ProtfolioData.json";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = data.projects;

  return (
    <section id="projects" className="py-20 bg-[#060f27] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-400">Projects</h2>
        <p className="text-center text-blue-100 mt-2 mb-12">
          Some of my recent works & projects
        </p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-[#0b1225] rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-300">{p.name}</h3>
                <p className="text-blue-100 mt-2 mb-4">{p.desc}</p>

                <div className="flex gap-4 mt-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
                    >
                      Live <FaExternalLinkAlt />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                    >
                      GitHub <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
