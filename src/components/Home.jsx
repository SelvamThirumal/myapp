import React from "react";

function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-100 text-center px-6">

      <h1 className="text-5xl font-bold text-indigo-600 mb-4">
        Welcome to MyApp 🚀
      </h1>

      <p className="text-gray-600 max-w-xl mb-6">
        This is a modern web application built using React and Tailwind CSS.
        Fast, responsive and user-friendly design.
      </p>

      <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
        Get Started
      </button>

    </div>
  );
}

export default Home;