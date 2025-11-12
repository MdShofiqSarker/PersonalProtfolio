import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-700  text-white text-center">
      <p>© {new Date().getFullYear()} All Rights Reserved | Developed by <span className="text-indigo-400 font-semibold">Md. ShofiQ</span></p>
    </footer>
  );
}
