import express from "express";

import { addHistory } from "../controllers/gameHistoryController.js";

const gameHistoryRouter = express.Router();

gameHistoryRouter.post("/new", addHistory);

export default gameHistoryRouter;
