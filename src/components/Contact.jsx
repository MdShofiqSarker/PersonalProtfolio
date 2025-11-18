import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch("/data/ProtfolioData.json")
      .then((res) => res.json())
      .then((data) => setContact(data.contact))
      .catch((err) => console.error("Failed to load contact:", err));
  }, []);

  if (!contact) return null;
  return (
    <section id="contact" className="py-20 lg:h-screen items-center lg:mt-10 bg-[#0f1422] text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">Let's Connect</h2>
          <p className="text-blue-100 mt-4">Feel free to reach out for collaborations or just a friendly hello 👋</p>

          <div className="mt-6 space-y-3 text-blue-200">
            <p><b>Email:</b> {contact.email}</p>
            <p><b>Phone:</b> {contact.phone}</p>
            <p><b>Location:</b> {contact.location}</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            {contact.socials.github && (
              <a href={contact.socials.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition text-2xl">
                <FaGithub />
              </a>
            )}
            {contact.socials.linkedin && (
              <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition text-2xl">
                <FaLinkedin />
              </a>
            )}
            {contact.socials.facebook && (
              <a href={contact.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition text-2xl">
                <FaFacebook />
              </a>
            )}
            {contact.socials.whatsapp && (
              <a href={contact.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition text-2xl">
                <FaWhatsapp />
              </a>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-[#0b1225] p-6 rounded-2xl shadow-lg">
          <input type="text" placeholder="Your Name" className="w-full border border-blue-600 px-4 py-3 rounded-lg bg-[#03091a] text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Your Email" className="w-full border border-blue-600 px-4 py-3 rounded-lg bg-[#03091a] text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <textarea rows="5" placeholder="Message" className="w-full border border-blue-600 px-4 py-3 rounded-lg bg-[#03091a] text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          <button className="w-full py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
