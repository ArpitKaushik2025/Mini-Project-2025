import mongoose from "mongoose";

import { gameHistorySchema } from "../schema/gameHistorySchema.js";

export const GameHistory = mongoose.model("GameHistory", gameHistorySchema);
