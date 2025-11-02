import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

function Login() {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const data = { username: username, password: password };

		try {
			const result = await axios.post(
				`${import.meta.env.VITE_BACKEND_URL}/user/login`,
				data,
				{ withCredentials: true }
			);

			setUsername("");
			setPassword("");

			if (result.status === 200) {
				navigate("/dashboard");
			}
		} catch (err) {
			console.error("Error during login : ", err.message);
		}
	};

	return (
		<div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#6a11cb] to-[#FFBBBB] dark:bg-gradient-to-br dark:from-[#1d1d2c]">
			{/* Main container */}
			<div className="bg-white dark:bg-[#1d1d2c] p-8 rounded-xl shadow-lg w-80 text-gray-500 dark:text-gray-500">
				<h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white text-shadow-md dark:text-shadow-gray-800 mb-6">
					Login
				</h2>

				<form onSubmit={handleFormSubmit}>
					{/* Username input */}
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block font-semibold text-gray-700 dark:text-gray-200 mb-1"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							required
							className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-[#2575fc] transition"
						/>
					</div>

					{/* Password input */}
					<div className="mb-5">
						<label
							htmlFor="password"
							className="block font-semibold text-gray-700 dark:text-gray-200 mb-1"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							required
							className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-[#2575fc] transition"
						/>
					</div>

					{/* Submit button */}
					<button
						type="submit"
						className="w-full bg-[#2575fc] dark:bg-[#de5935] text-white py-2 rounded-md font-medium text-lg hover:bg-[#1b5edb] dark:hover:bg-orange-500 shadow-md transition"
					>
						Login
					</button>

					{/* Link */}
					<p className="text-center text-gray-700 dark:text-gray-600 mt-3 text-sm">
						Don't have an account?{" "}
						<Link to="/signup" className="text-[#2575fc] hover:underline">
							Sign up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Login;
