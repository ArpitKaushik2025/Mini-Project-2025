import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const questionBankSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  question: {
    type: String,
    required: true,
    unique: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  answer: {
    type: String,
    required: true,
  },
});
