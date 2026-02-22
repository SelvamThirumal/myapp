import React, { useState } from "react";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center 
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="relative w-96 bg-white/20 backdrop-blur-lg 
                      rounded-2xl shadow-2xl p-8 overflow-hidden">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* LOGIN FORM */}
        <div
          className={`transition-all duration-700 transform ${
            isLogin
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 -translate-x-10 scale-95 absolute"
          }`}
        >
          {isLogin && (
            <form className="space-y-4">

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 
                                 text-white py-3 rounded-lg transition 
                                 transform hover:-translate-y-1 hover:shadow-xl">
                Login
              </button>

            </form>
          )}
        </div>

        {/* REGISTER FORM */}
        <div
          className={`transition-all duration-700 transform ${
            !isLogin
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-10 scale-95 absolute"
          }`}
        >
          {!isLogin && (
            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <button className="w-full bg-pink-600 hover:bg-pink-700 
                                 text-white py-3 rounded-lg transition 
                                 transform hover:-translate-y-1 hover:shadow-xl">
                Register
              </button>

            </form>
          )}
        </div>

        {/* Toggle */}
        <p className="text-center text-white mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-bold underline hover:text-yellow-200"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>

      </div>
    </div>
  );
}

export default LoginRegister;