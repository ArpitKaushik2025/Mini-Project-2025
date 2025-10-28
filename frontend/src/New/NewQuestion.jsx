function NewQuestion() {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="text-2xl subpixel-antialiased font-semibold tracking-widest decoration-wavy text-shadow-lg backdrop-blur-md Z-2S dark:text-white dark:bg-gray-900 text-shadow-gray-500 backdrop-blur-md">
				CREATE NEW QUESTION
			</div>
			<div className="flex-1 grid grid-cols-3 grid-rows-1 gap-1 px-12 py-12 backdrop-blur-2xl bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB] dark:bg-gradient-to-r dark:from-[#7663A8] dark:to-[#5E6FA5]">
				{/* Left Pane */}
				<div className="col-span-1 min-h-auto">
					<div className="category-selector-dropdown mt-30">
						<form className="max-w-md mx-auto">
							<label
								for="categories"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Choose a Suitable Category
							</label>
							<select
								id="categories"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								<option>➕ Create New</option>
								{/* Needs some implementation to cause the following field to pop up when user selects "Create New"  */}
								<option>🎬 Films and TV</option>
								<option>🏏 Sports</option>
							</select>
						</form>
					</div>

					<div className="new-category-creator">
						<form className="max-w-md mx-auto">
							<div className="mb-5">
								<label
									for="new-category"
									className="block mb-2 text-md font-medium text-green-700 dark:text-green-500"
								>
									Category Name
								</label>
								<input
									type="text"
									id="new-category-success"
									className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
									placeholder="Enter Something Suitable..."
								/>
								{/* Need some logic here to validate if the entered category is not redundant.
              Also need some logic here to format the user input in a certain way to ensure consistency. */}
								<p className="mt-2 text-md text-green-600 dark:text-green-500">
									<span className="font-medium">Alright!</span> This Category
									can be Created!
								</p>
							</div>
							<div>
								<label
									for="category-name-error"
									className="block mb-2 text-md font-medium text-red-700 dark:text-red-500"
								>
									Category Name
								</label>
								<input
									type="text"
									id="new-category-fail"
									className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-md rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
									placeholder="Enter Something Suitable..."
								/>
								<p className="mt-2 text-md text-red-600 dark:text-red-500">
									<span className="font-medium">Oops!</span> This Category
									Already Exists!
								</p>
							</div>
						</form>
					</div>

					<div className="difficulty-selector-dropdown m-12">
						<form className="max-w-md mx-auto">
							<label
								for="difficulty"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Pick the Difficulty
							</label>
							<select
								id="difficulty"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								<option className="text-green-800">🐣 Beginner</option>
								<option className="text-yellow-600">🤓 Intermediate</option>
								<option className="text-red-500">🧑🏻‍🏫 Expert</option>
							</select>
						</form>
						{/* Need logic to send user choice to DB */}
					</div>
				</div>
				{/* Right Pane */}
				<div className="options-form-fields size-auto col-span-2">
					<div className="question outline-double rounded-xl mt-8 mx-4 p-2 dark:outline-indigo-200">
						<form className="max-w-3xl mx-auto">
							<div className="relative z-0 w-full mb-5 group">
								<label
									for="New_Question"
									className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
								>
									Your Question
								</label>
								<input
									type="text"
									name="question"
									id="question"
									className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder="Enter your Question"
									required
								/>
							</div>
						</form>
					</div>
					<div className="options grid grid-cols-2 mt-4 text-center gap-x-8 gap-y-12 p-8">
						{/* Option - 1 */}
						<div className="option-1 bg-green-300 outline-double m-auto rounded-xl w-[80%] p-8 dark:bg-">
							<input
								type="text"
								name="question"
								id="question"
								className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Enter First Option"
								required
							/>
							<label className="inline-flex items-center mb-5 cursor-pointer gap-5 mt-5 mb-0">
								<input type="checkbox" value="" className="sr-only peer" />
								<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
								<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									Correct Answer?
								</span>
							</label>
						</div>

						{/* Option - 2 */}
						<div className="option-2 bg-green-300 outline-double rounded-xl m-auto w-[80%] p-8">
							<input
								type="text"
								name="question"
								id="question"
								className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Enter Second Option"
								required
							/>
							<label className="inline-flex items-center mb-5 cursor-pointer gap-5 mt-5 mb-0">
								<input type="checkbox" value="" className="sr-only peer" />
								<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
								<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									Correct Answer?
								</span>
							</label>
						</div>

						{/* Option - 3 */}
						<div className="option-3 bg-green-300 outline-double rounded-xl m-auto w-[80%] p-8">
							<input
								type="text"
								name="question"
								id="question"
								className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Enter Third Option"
								required
							/>
							<label className="inline-flex items-center mb-5 cursor-pointer gap-5 mt-5 mb-0">
								<input type="checkbox" value="" className="sr-only peer" />
								<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
								<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									Correct Answer?
								</span>
							</label>
						</div>

						{/* Option - 4 */}
						<div className="option-4 bg-green-300 outline-double rounded-xl m-auto w-[80%] p-8">
							<input
								type="text"
								name="question"
								id="question"
								className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Enter Fourth Option"
								required
							/>
							<label className="inline-flex items-center mb-5 cursor-pointer gap-5 mt-5 mb-0">
								<input type="checkbox" value="" className="sr-only peer" />
								<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
								<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									Correct Answer?
								</span>
							</label>
						</div>
						{/* Need logic to disable Submit button when multiple "Correct Answers" are present.
            Ideally the user shouldn't be able to select multiple toggles in the first place.
            But I don't know how to implement that, and this seems like it'll work too. */}
					</div>
				</div>
				<button
					type="submit"
					className="col-span-3 rounded-full text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default NewQuestion;
