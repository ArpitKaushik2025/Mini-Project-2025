import express from "express";

import {
  addCategory,
  fetchCategories,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.route("/new").post(addCategory).get(fetchCategories);

export default categoryRouter;
