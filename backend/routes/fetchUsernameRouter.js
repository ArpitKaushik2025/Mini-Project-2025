import express from "express";

import { verifyToken } from "../middleware.js";
import { verify } from "../controllers/fetchUsernameController.js";

const fetchUsernameRouter = express.Router();

fetchUsernameRouter.get("/self", verifyToken, verify);

export default fetchUsernameRouter;
