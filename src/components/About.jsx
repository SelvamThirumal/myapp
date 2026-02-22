import React from "react";

function About() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-lg
                      rounded-2xl shadow-2xl p-6 md:p-10 text-center">

        <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
          About Us
        </h1>

        <p className="text-white/90 leading-relaxed text-sm md:text-base">
          MyApp is a modern platform designed to provide seamless digital
          experiences using React and Tailwind CSS.
        </p>

      </div>
    </div>
  );
}

export default About;