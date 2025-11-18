import React, { useEffect, useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/ProtfolioData.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  if (!skills.length)
    return <p className="text-center text-white py-10">Loading...</p>;

  return (
    <section id="skills" className="py-20 bg-[#03091a] text-white h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-400">My Skills</h2>
        <p className="text-center text-blue-100 mt-2 mb-12">
          Technologies I use to build clean & responsive web experiences
        </p>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((group, i) => (
            <div
              key={i}
              className="p-8 bg-[#0b1225] rounded-2xl shadow-lg hover:shadow-blue-800/30 transition duration-500"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-6 border-b border-blue-800 pb-2">
                {group.category}
              </h3>

              {/* Skills List */}
              {group.items.map((skill, index) => (
                <div key={index} className="mb-5">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-blue-100">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-[#1a2340] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all duration-700 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
