import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>

        <form className="space-y-4">
          
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;