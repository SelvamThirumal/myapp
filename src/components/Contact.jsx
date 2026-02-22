import React from "react";

function Contact() {
  return (
    <div className="min-h-[80vh] bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">

        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Contact Us
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;