import "./NewQuestion.css";

function NewQuestion() {
	return (
		<>
			<div class="text-2xl subpixel-antialiased font-semibold tracking-widest decoration-wavy text-shadow-lg backdrop-blur-md Z-2S">
				CREATE NEW QUESTION
			</div>
			<div class="grid grid-cols-3 grid-rows-1 gap-1 h-screen">
				{/* Left Pane */}
				<div class="h-screen bg-yellow-100 col-span-1">
					<div class="category-selector-dropdown mt-30">
						<form class="max-w-md mx-auto">
							<label
								for="categories"
								class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Choose a Suitable Category
							</label>
							<select
								id="categories"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								<option>➕ Create New</option>
								{/* Needs some implementation to cause the following field to pop up when user selects "Create New"  */}
								<option>🎬 Films and TV</option>
								<option>🏏 Sports</option>
							</select>
						</form>
					</div>

					<div class="new-category-creator">
						<form class="max-w-md mx-auto">
							<div class="mb-5">
								<label
									for="new-category"
									class="block mb-2 text-md font-medium text-green-700 dark:text-green-500"
								>
									Category Name
								</label>
								<input
									type="text"
									id="new-category-success"
									class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
									placeholder="Enter Something Suitable..."
								/>
								{/* Need some logic here to validate if the entered category is not redundant.
              Also need some logic here to format the user input in a certain way to ensure consistency. */}
								<p class="mt-2 text-md text-green-600 dark:text-green-500">
									<span class="font-medium">Alright!</span> This Category can be
									Created!
								</p>
							</div>
							<div>
								<label
									for="category-name-error"
									class="block mb-2 text-md font-medium text-red-700 dark:text-red-500"
								>
									Category Name
								</label>
								<input
									type="text"
									id="new-category-fail"
									class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-md rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
									placeholder="Enter Something Suitable..."
								/>
								<p class="mt-2 text-md text-red-600 dark:text-red-500">
									<span class="font-medium">Oops!</span> This Category Already
									Exists!
								</p>
							</div>
						</form>
					</div>

					<div class="difficulty-selector-dropdown m-12">
						<form class="max-w-md mx-auto">
							<label
								for="difficulty"
								class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Pick the Difficulty
							</label>
							<select
								id="difficulty"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 darl:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								<option class="text-green-800">🐣 Beginner</option>
								<option class="text-yellow-600">🤓 Intermediate</option>
								<option class="text-red-500">🧑🏻‍🏫 Expert</option>
							</select>
						</form>
						{/* Need logic to send user choice to DB */}
					</div>
					<button
						type="submit"
						class="w-screen rounded-full text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
					>
						Submit
					</button>
				</div>
				{/* Right Pane */}
				<div class="options-form-fields col-span-2 bg-blue-200">
					<div class="question outline-double rounded-xl m-8 p-4 mt-15">
						<form class="max-w-3xl mx-auto">
							<div class="relative z-0 w-full mb-5 group">
								<label
									for="New_Question"
									class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
								>
									Your Question
								</label>
								<input
									type="text"
									name="question"
									id="question"
									class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder="Enter your Question"
									required
								/>
							</div>
						</form>
					</div>
					<div class="options grid grid-cols-2 text-center">
						{/* Option - 1 */}
						<div class="option-1 bg-green-300 outline-double rounded-xl m-12 p-8 pb-2">
							<input
								type="text"
								name="question"
								id="question"
								class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Enter First Option"
								required
							/>
							<label class="inline-flex items-center mb-5 cursor-pointer gap-5 mt-5 mb-0">
								<input type="checkbox" value="" class="sr-only peer" />
								<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
								<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									Correct Answer?
								</span>
							</label>
						</div>

						{/* Option - 2 */}
						<div class="option-2 bg-green-300 outline-double rounded-xl m-12 p-8">
							<input
								type="text"
								name="question"
								id="question"
								class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Enter Second Option"
								required
							/>
							<label class="inline-flex items-center mb-5 cursor-pointer gap-5 mt-5 mb-0">
								<input type="checkbox" value="" class="sr-only peer" />
								<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
								<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									Correct Answer?
								</span>
							</label>
						</div>

						{/* Option - 3 */}
						<div class="option-3 bg-green-300 outline-double rounded-xl m-12 p-8">
							<input
								type="text"
								name="question"
								id="question"
								class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Enter Third Option"
								required
							/>
							<label class="inline-flex items-center mb-5 cursor-pointer gap-5 mt-5 mb-0">
								<input type="checkbox" value="" class="sr-only peer" />
								<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
								<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									Correct Answer?
								</span>
							</label>
						</div>

						{/* Option - 4 */}
						<div class="option-4 bg-green-300 outline-double rounded-xl m-12 p-8">
							<input
								type="text"
								name="question"
								id="question"
								class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Enter Fourth Option"
								required
							/>
							<label class="inline-flex items-center mb-5 cursor-pointer gap-5 mt-5 mb-0">
								<input type="checkbox" value="" class="sr-only peer" />
								<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
								<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									Correct Answer?
								</span>
							</label>
						</div>
						{/* Need logic to disable Submit button when multiple "Correct Answers" are present.
            Ideally the user shouldn't be able to select multiple toggles in the first place.
            But I don't know how to implement that, and this seems like it'll work too. */}
					</div>
				</div>
			</div>
		</>
	);
}

export default NewQuestion;
