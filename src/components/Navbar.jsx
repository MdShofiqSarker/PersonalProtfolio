import React, { useState } from "react";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-[#020617cc] border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">Shofiq.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-blue-200 text-sm">
          {links.map((i, idx) => (
            <li key={idx}>
              <Link
                to={i.to}
                className="hover:text-blue-400 transition"
              >
                {i.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-blue-200 text-xl" /> : <FaBars className="text-blue-200 text-xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-[#020617cc] backdrop-blur-md px-6 py-4 border-t border-blue-500/20">
          {links.map((i, idx) => (
            <li key={idx}>
              <Link
                to={i.to}
                onClick={() => setIsOpen(false)}
                className="block text-blue-200 hover:text-blue-400 transition"
              >
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
