import React from "react";

function Header() {
  return (
    <header className="bg-indigo-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo with animation */}
        <h1 className="text-white text-2xl font-bold cursor-pointer transform hover:scale-110 transition duration-300">
          MyApp
        </h1>

        {/* Nav Links */}
        <nav className="flex items-center space-x-8 text-white font-medium">
          
          {/* Animated Links */}
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group transition duration-300"
            >
              {item}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Login Button Animation */}
          <a
            href="#"
            className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold 
                       hover:bg-indigo-100 transform hover:-translate-y-1 
                       hover:shadow-lg transition duration-300"
          >
            Login
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Header;