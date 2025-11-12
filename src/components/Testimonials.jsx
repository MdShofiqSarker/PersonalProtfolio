import React from "react";
import data from "../../public/data/ProtfolioData.json";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = data.testimonials;

  return (
    <section id="testimonials" className="py-20 bg-[#0a1a2b] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h3 className="text-blue-400 uppercase tracking-widest font-semibold mb-2">
          {testimonials.title}
        </h3>
        <h2 className="text-4xl font-bold mb-12">{testimonials.subtitle}</h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.items.map((client) => (
            <div
              key={client.id}
              className="bg-[#0b1835] rounded-2xl p-8 shadow-lg border border-blue-500/10 hover:shadow-blue-400/20 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-blue-500 mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                {client.name}
              </h3>
              <p className="text-blue-300 text-sm mb-3">{client.role}</p>

              {/* Rating */}
              <div className="flex justify-center mb-4 text-yellow-400">
                {Array.from({ length: client.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-blue-100 italic leading-relaxed">
                “{client.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
