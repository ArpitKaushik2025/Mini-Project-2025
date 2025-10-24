import mongoose from "mongoose";

import { questionBankSchema } from "../schema/questionBankSchema";

export const QuestionBank = mongoose.model("QuestionBank", questionBankSchema);
