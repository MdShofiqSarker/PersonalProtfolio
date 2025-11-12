import React from "react";
import data from "../../public/data/ProtfolioData.json";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaServer,
  FaSearch,
} from "react-icons/fa";

const iconMap = {
  FaCode: <FaCode />,
  FaPalette: <FaPalette />,
  FaMobileAlt: <FaMobileAlt />,
  FaServer: <FaServer />,
  FaSearch: <FaSearch />,
};

export default function Services() {
  const services = data.services;

  return (
    <section id="services" className="py-20 bg-[#0a183a] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h3 className="text-blue-400 uppercase tracking-widest font-semibold mb-2">
          {services.title}
        </h3>
        <h2 className="text-4xl font-bold mb-10">{services.subtitle}</h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service) => (
            <div
              key={service.id}
              className="bg-[#0b1835] rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 hover:shadow-blue-500/30 border border-blue-500/10"
            >
              <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-blue-100 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
