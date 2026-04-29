function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600">

      {/* Glow background effect */}
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30 -z-10 top-20 left-20"></div>
      <div className="absolute w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30 -z-10 bottom-20 right-20"></div>

      {/* Card */}
      <div className="w-80 bg-white/20 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/30">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-white mb-2">
          Welcome
        </h2>

        <p className="text-center text-white/80 mb-8 text-sm">
          Please login to continue
        </p>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
        />

        {/* Button */}
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition duration-200">
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-white/70 mt-6">
          Don’t have an account?{" "}
          <span className="text-yellow-300 font-semibold cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;