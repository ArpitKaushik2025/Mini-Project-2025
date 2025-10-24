import mongoose from "mongoose";

import { questionBankSchema } from "../schema/questionBankSchema.js";

export const QuestionBank = mongoose.model("QuestionBank", questionBankSchema);
