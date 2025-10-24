import mongoose from "mongoose";

import { categorySchema } from "../schema/categorySchema.js";

export const Category = mongoose.model("Category", categorySchema);
