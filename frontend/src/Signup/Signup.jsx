function Signup() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#6a11cb] to-[#2575fc]">
      {/* Main container */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Sign Up
        </h2>

        <form action="#">
          {/* Username input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-semibold text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-[#2575fc] transition"
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-[#2575fc] transition"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label
              htmlFor="confirm"
              className="block font-semibold text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm"
              placeholder="Confirm your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-[#2575fc] transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2575fc] text-white py-2 rounded-md font-medium text-lg hover:bg-[#1b5edb] transition"
          >
            Sign Up
          </button>

          {/* Link */}
          <p className="text-center text-gray-700 mt-3 text-sm">
            Already have an account?{" "}
            <a href="login.html" className="text-[#2575fc] hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
