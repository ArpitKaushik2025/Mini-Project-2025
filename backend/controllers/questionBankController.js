import { QuestionBank } from "../models/questionBankModel.js";

export const addQuestion = async (req, res) => {
  try {
    const { category, difficulty, question, answer, options } = req.body;

    const prevQuestion = await QuestionBank.findOne({
      category: category,
      question: question,
    });

    if (prevQuestion) {
      return res.status(400).json({
        message: "Similar question for this category already exists!",
      });
    }

    const newQuestion = new QuestionBank({
      category: category,
      difficulty: difficulty,
      question: question,
      options: options,
      answer: answer,
    });

    await newQuestion.save();

    res.status(200).json({ message: "Question added successfully!" });
  } catch (err) {
    console.error("Error during adding the question  : ", err.message);
    res.status(500).send("Server Error!");
  }
};
