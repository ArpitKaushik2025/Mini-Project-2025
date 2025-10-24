import mongoose from "mongoose";

import { gameHistorySchema } from "../schema/gameHistorySchema";

export const GameHistory = mongoose.model("GameHistory", gameHistorySchema);
