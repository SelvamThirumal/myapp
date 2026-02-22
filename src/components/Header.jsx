import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">

        {/* Logo */}
        <h1 className="text-white text-xl md:text-2xl font-extrabold">
          MyApp ✨
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Link
            to="/login"
            className="bg-white text-indigo-700 px-5 py-2 rounded-full font-bold"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-indigo-700 text-white px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        </div>
      )}
    </header>
  );
}

export default Header;