function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-80 border border-gray-100">

        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
        />

        <button className="w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 active:scale-95 transition duration-200 shadow-md">
          Login
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          Forgot password?
        </p>

      </div>
    </div>
  );
}

export default Login;