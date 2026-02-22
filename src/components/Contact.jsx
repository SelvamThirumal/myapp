import React from "react";

function Contact() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-100">

      <div className="w-full max-w-lg bg-white p-6 md:p-8 rounded-xl shadow-xl">

        <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6 text-center">
          Contact Us
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg"
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;