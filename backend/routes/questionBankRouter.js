import express from "express";

import { addQuestion } from "../controllers/questionBankController.js";

const questionBankRouter = express.Router();

questionBankRouter.post("/new", addQuestion);

export default questionBankRouter;
