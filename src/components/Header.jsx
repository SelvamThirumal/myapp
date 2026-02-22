import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-white text-2xl font-bold">
          myapp
        </h1>

        <nav className="space-x-6 text-white font-medium">

          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>

          <Link
            to="/login"
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Login
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Header;