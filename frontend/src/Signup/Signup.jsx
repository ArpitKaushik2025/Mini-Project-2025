import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

function Signup() {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [retypedPassword, setRetypedPassword] = useState("");

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (retypedPassword !== password) {
			return;
		}

		const data = { username: username, password: password };

		try {
			const result = await axios.post(
				`${import.meta.env.VITE_BACKEND_URL}/user/signup`,
				data,
				{ withCredentials: true }
			);

			setUsername("");
			setPassword("");
			setRetypedPassword("");

			if (result.status === 200) {
				navigate("/dashboard");
			} else {
				console.log("Some error occurred in signup!");
			}
		} catch (err) {
			console.error("Signup failed : ", err.message);
		}
	};

	return (
		<div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#6a11cb] to-[#FFBBBB] dark:bg-gradient-to-br dark:from-[#1d1d2c]">
			{/* Main container */}
			<div className="bg-white dark:bg-[#1d1d2c] text-gray-500 dark:text-gray-500 p-8 rounded-xl shadow-lg w-80">
				<h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white text-shadow-md dark:text-shadow-gray-800 mb-6">
					Sign Up
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
							placeholder="Choose a username"
							value={username}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							required
							className="w-full px-3 py-2 border border-gray-300 dark:border-[#a87fff60] rounded-md outline-none focus:border-[#2575fc] transition"
						/>
					</div>

					{/* Password input */}
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block font-semibold text-gray-700 dark:text-gray-200 mb-1"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="Create a password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							required
							className="w-full px-3 py-2 border border-gray-300 dark:border-[#a87fff60] rounded-md outline-none focus:border-[#2575fc] transition"
						/>
					</div>

					{/* Confirm Password */}
					<div className="mb-5">
						<label
							htmlFor="confirm"
							className="block font-semibold text-gray-700 dark:text-gray-200 mb-1"
						>
							Confirm Password
						</label>
						<input
							type="password"
							id="confirm"
							placeholder="Confirm your password"
							value={retypedPassword}
							onChange={(e) => {
								setRetypedPassword(e.target.value);
							}}
							required
							className="w-full px-3 py-2 border border-gray-300 dark:border-[#a87fff60] rounded-md outline-none focus:border-[#2575fc] transition"
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full bg-[#2575fc] dark:bg-[#de5935] text-white py-2 rounded-md font-medium text-lg hover:bg-[#1b5edb] dark:hover:bg-orange-500 shadow-md transition"
					>
						Sign Up
					</button>

					{/* Link */}
					<p className="text-center text-gray-700 dark:text-gray-600 mt-3 text-sm">
						Already have an account?{" "}
						<Link to="/login" className="text-[#2575fc] hover:underline">
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Signup;
