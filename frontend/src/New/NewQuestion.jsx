import { useEffect, useState } from "react";
import axios from "axios";

import "./NewQuestion.css";

function NewQuestion() {
  const [categories, setCategories] = useState(null);

  const [categoryChoice, setCategoryChoice] = useState("New");

  const [newCategory, setNewCategory] = useState("");

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    { value: "", answer: false },
    { value: "", answer: false },
    { value: "", answer: false },
    { value: "", answer: false },
  ]);

  const [difficulty, setDifficulty] = useState("Beginner");

  const [error, setError] = useState();

  const [correctIndex, setCorrectIndex] = useState();

  const handleCategoryChange = (e) => {
    const input = e.target.value.trim();
    setNewCategory(input);

    const exists = categories.some(
      (name) =>
        name.toLowerCase().includes(input.toLowerCase()) ||
        input.toLowerCase().includes(name.toLowerCase())
    );

    setError(exists && input.length > 0);
  };

  const handleOptionChange = (idx, updatedValue, correctIndex) => {
    const updatedOptions = options.map((opt, i) =>
      i === idx ? { ...opt, value: updatedValue } : opt
    );

    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (categoryChoice === "New") {
      const categoryData = {
        name: newCategory,
      };
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/category/new`,
        categoryData
      );

      console.log(result.data.message);
    }

    const finalOptions = options.map((obj, idx) => ({
      value: obj.value,
      answer: idx === correctIndex,
    }));

    const questionData = {
      categoryName: categoryChoice === "New" ? newCategory : categoryChoice,
      difficulty: difficulty,
      question: question,
      options: finalOptions,
    };

    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/question/new`,
      questionData
    );

    console.log(result.data.message);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/category/new`
        );

        setCategories(result.data.map((category) => category.name));
      } catch (err) {
        console.error("Error in fetching categories! : ", err.message);
      }
    };

    fetchCategory();
  }, []);

  return (
    <div className="max-h-screen flex flex-col">
      <div className="text-2xl subpixel-antialiased font-semibold tracking-widest decoration-wavy text-shadow-lg backdrop-blur-md Z-2S dark:text-white dark:bg-gray-900 text-shadow-gray-500 backdrop-blur-md">
        CREATE NEW QUESTION
      </div>

      <div className="grid grid-cols-3 grid-rows-1 gap-1 px-12 py-12 backdrop-blur-2xl bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB] dark:bg-[gradient-to-r dark:from-[#1d1d2c]">
        {/* Left Pane */}
        <div className="col-span-1">
          <div className="category-selector-dropdown mt-30">
            <form className="max-w-md mx-auto">
              <label
                htmlFor="categories"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Choose a Suitable Category
              </label>
              <select
                onChange={(e) => {
                  setCategoryChoice(e.target.value);
                }}
                id="categories"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#1d1d2c] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="New">➕ Create New</option>
                {categories &&
                  categories.map((name, i) => <option key={i}>{name}</option>)}
              </select>
            </form>
          </div>

          {/* New Category Adding */}
          {categoryChoice === "New" ? (
            <div className="new-category-creator">
              <form className="max-w-md mx-auto">
                <div className="mb-5">
                  <label
                    htmlFor="new-category"
                    className={`${
                      error ? "text-red-500" : "text-green-500"
                    } block mb-2 mt-6 text-md font-medium`}
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    value={newCategory}
                    id="new-category"
                    onChange={handleCategoryChange}
                    className={`${
                      error
                        ? "bg-red-50 border-red-500"
                        : "bg-green-50 border-green-500"
                    } border text-md rounded-lg block w-full p-2.5 placeholder-gray-400 dark:bg-[#1d1d2c] dark:text-white`}
                    placeholder="Enter Something Suitable..."
                    required
                  />
                  {error ? (
                    <p className="mt-4 text-red-500">
                      Oops! Similar Category already exists
                    </p>
                  ) : (
                    <p className="mt-4 text-green-500">
                      Alright! This category is suitable.
                    </p>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <div></div>
          )}

          {/* Difficulty Level */}
          <div className="difficulty-selector-dropdown m-12">
            <form className="max-w-md mx-auto">
              <label
                htmlFor="difficulty"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Pick the Difficulty
              </label>
              <select
                id="difficulty"
                onChange={(e) => {
                  setDifficulty(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#1d1d2c] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="text-green-800" value="Beginner">
                  🐣 Beginner
                </option>
                <option className="text-yellow-600" value="Intermediate">
                  🤓 Intermediate
                </option>
                <option className="text-red-500" value="Expert">
                  🧑🏻‍🏫 Expert
                </option>
              </select>
            </form>
          </div>
        </div>

        {/* Right Pane */}
        <div className="options-form-fields size-auto col-span-2 ">
          <div className="question outline-double rounded-xl mt-8 mx-4 p-2 dark:outline-indigo-200">
            <form className="max-w-3xl mx-auto">
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="New_Question"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                >
                  Your Question
                </label>
                <input
                  type="text"
                  name="question"
                  id="question"
                  value={question}
                  onChange={(e) => {
                    setQuestion(e.target.value);
                  }}
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                  placeholder="Enter your Question"
                  required
                />
              </div>
            </form>
          </div>

          {/* Options Grid */}
          <div className="options grid grid-cols-2 mt-4 text-center gap-x-8 gap-y-12 p-8">
            {/* Option - 1 */}
            {options.map((option, idx) => (
              <div
                key={idx}
                className="option-1 outline-double m-auto rounded-xl w-[80%] p-8 liquid-glass"
              >
                <input
                  type="text"
                  name="question"
                  id="question"
                  value={option.value}
                  onChange={(e) => {
                    handleOptionChange(idx, e.target.value, correctIndex);
                  }}
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter First Option"
                  required
                />
                <label className="inline-flex items-center mb-5 cursor-pointer gap-5 mt-5 mb-0">
                  <input
                    type="radio"
                    name="correctAnswer"
                    checked={correctIndex === idx}
                    onChange={() => setCorrectIndex(idx)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 outline-1 outline-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Correct Answer?
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="col-span-3 rounded-full text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-[#1d1d2c] dark:hover:bg-black dark:focus:white dark:outline-1 dark:outline-[#a87fff60] drop-shadow-[0_12px_12px_rgba(0,0,0,0.8)]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewQuestion;
