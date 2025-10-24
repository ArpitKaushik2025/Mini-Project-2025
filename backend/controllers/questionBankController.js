import { QuestionBank } from "../models/questionBankModel.js";
import { Category } from "../models/categoryModel.js";

export const addQuestion = async (req, res) => {
  try {
    const { categoryName, difficulty, question, answer, options } = req.body; // Extracting data from request body

    // Check if question of the particular category already exists
    const prevQuestion = await QuestionBank.findOne({
      category: categoryName,
      question: question,
    });

    // Send response with desired message if question already exists
    if (prevQuestion) {
      return res.status(400).json({
        message: "Similar question for this category already exists!",
      });
    }

    // Find category according to category name given to get id for reference
    const category = Category.findOne({ name: categoryName });

    // Throw error if category could not be fetched
    if (!category) {
      console.log("Something went wrong! Could not add question!");
      return res.status(500).json("Internal Server Error!");
    }

    // New Question Object
    const newQuestion = new QuestionBank({
      category: category._id,
      difficulty: difficulty,
      question: question,
      options: options,
      answer: answer,
    });

    // Throw error if new question object could not be formed
    if (!newQuestion) {
      console.log("Something went wrong! New Question could not be added!");
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }

    // Upload new question object to DB
    await newQuestion.save();

    // Send response with success message
    res.status(200).json({ message: "Question added successfully!" });
  } catch (err) {
    console.error("Error during adding the question  : ", err.message);
    res.status(500).send("Internal Server Error!");
  }
};
