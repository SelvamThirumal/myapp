import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO SECTION */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build Amazing Apps 🚀
        </h1>

        <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl">
          MyApp helps developers create fast, scalable and modern web
          applications using the latest technologies.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold 
                     hover:bg-gray-200 transition transform hover:scale-105"
        >
          Get Started
        </button>
      </section>

      {/* 🔥 FEATURES */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["⚡ Fast Performance", "Optimized for speed and efficiency."],
            ["🔒 Secure", "Advanced security for your data."],
            ["📱 Responsive", "Works on all devices perfectly."]
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">{item[0]}</h3>
              <p className="text-gray-600">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 SERVICES */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            ["Web Development", "Modern websites and web apps."],
            ["Mobile Apps", "Cross-platform mobile solutions."],
            ["Cloud Solutions", "Scalable cloud deployment."]
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">{item[0]}</h3>
              <p className="text-gray-600">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 STATS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["10K+", "Users"],
            ["500+", "Projects"],
            ["99%", "Satisfaction"],
            ["24/7", "Support"]
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-indigo-600">{item[0]}</h3>
              <p className="text-gray-600">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>

        <p className="mb-8">
          Join thousands of users building modern applications today.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold 
                     hover:bg-gray-200 transition transform hover:scale-105"
        >
          Create Account
        </button>
      </section>

    </div>
  );
}

export default Home;