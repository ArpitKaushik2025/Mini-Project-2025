import mongoose from "mongoose";

import { categorySchema } from "../schema/categorySchema";

export const Category = mongoose.model("Category", categorySchema);
