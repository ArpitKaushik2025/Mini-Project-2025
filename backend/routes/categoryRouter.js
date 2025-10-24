import express from "express";

import { addCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/new", addCategory);

export default categoryRouter;
