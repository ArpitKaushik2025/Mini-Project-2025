import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const questionBankSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Expert"],
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      value: { type: String, required: true },
      answer: { type: Boolean, required: true },
    },
  ],
});
