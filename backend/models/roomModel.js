import mongoose from "mongoose";

import { roomSchema } from "../schema/roomSchema";

export const Room = mongoose.model("Room", roomSchema);
