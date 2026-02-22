import React, { useState } from "react";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg
                      rounded-2xl shadow-2xl p-6 md:p-8">

        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form className="space-y-4">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white/80"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/80"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/80"
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-white mt-6 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-bold underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>

      </div>
    </div>
  );
}

export default LoginRegister;