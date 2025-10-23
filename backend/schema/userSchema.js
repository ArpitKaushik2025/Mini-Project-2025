import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gameHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "GameHistory",
    },
  ],
});
