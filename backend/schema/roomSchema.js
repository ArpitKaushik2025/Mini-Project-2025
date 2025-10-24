import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const roomSchema = new Schema({
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  players: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      score: {
        type: Number,
        required: true,
      },
    },
  ],
  winner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  startedAt: {
    type: Date,
    required: true,
  },
  endedAt: {
    type: Date,
    default: Date.now(),
  },
});
