import mongoose from "mongoose";

import { roomSchema } from "../schema/roomSchema.js";

export const Room = mongoose.model("Room", roomSchema);
