import React from "react";

function About() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
                    px-6 py-16">

      {/* Animated Card */}
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl 
                      max-w-2xl w-full p-10 text-center
                      transform transition duration-700
                      hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

        {/* Title Animation */}
        <h1 className="text-4xl font-bold text-white mb-6 
                       animate-pulse">
          About Us
        </h1>

        {/* Paragraph */}
        <p className="text-white/90 leading-relaxed mb-8">
          MyApp is a modern platform designed to provide seamless digital
          experiences. Built with cutting-edge technologies like React and
          Tailwind CSS, we focus on performance, scalability and user
          satisfaction. Our mission is to create intuitive, fast and visually
          appealing applications for users worldwide.
        </p>

        {/* Button Animation */}
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg
                           font-semibold transform transition duration-300
                           hover:-translate-y-1 hover:scale-110
                           hover:bg-indigo-100 hover:shadow-xl">
          Learn More
        </button>

      </div>
    </div>
  );
}

export default About;