import express from "express";

import { addRoom } from "../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.post("/new", addRoom);

export default roomRouter;
