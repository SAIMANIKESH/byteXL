import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/80 shadow-md fixed top-0 left-0 z-50 backdrop-blur">
      <div className="font-extrabold text-xl text-blue-700 tracking-wide">InfoHub</div>
      <ul className="flex gap-6 text-slate-600 font-medium">
        <li>
          <a href="/" className="hover:text-blue-600 transition">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
