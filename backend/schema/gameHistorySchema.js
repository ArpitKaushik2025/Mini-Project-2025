import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const gameHistorySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  // roomId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Room",
  // },
  playedAt: {
    type: Date,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});
