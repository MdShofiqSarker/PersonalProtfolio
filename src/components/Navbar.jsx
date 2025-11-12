import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/data/ProtfolioData.json")
      .then((res) => res.json())
      .then((data) => setNav(data.navbar))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  if (!nav) return <p className="text-center text-white py-4">Loading...</p>;

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-[#020617cc] border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">{nav.logo}</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-blue-200 text-sm">
          {nav.links.map((i, index) => (
            <li key={index}>
              <Link
                to={i.ref.replace("#","")}
                className="hover:text-blue-400 transition"
              >
                {i.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="text-blue-200 text-xl" /> : <FaBars className="text-blue-200 text-xl" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-[#020617cc] backdrop-blur-md px-6 py-4 border-t border-blue-500/20">
          {nav.links.map((i, index) => (
            <li key={index}>
              <Link
                to={i.ref.replace("#","")}
                className="block text-blue-200 hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
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
