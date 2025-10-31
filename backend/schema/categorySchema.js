import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: null,
  },
});
