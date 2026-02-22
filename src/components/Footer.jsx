import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">MyApp</h2>
          <p className="text-sm">
            Modern web application built using React and Tailwind CSS.
            Creating fast, responsive and beautiful user experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>Email: support@myapp.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
        © 2026 MyApp. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;