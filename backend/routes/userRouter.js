import express from "express";

import { login, signup, logout } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);

userRouter.post("/login", login);

userRouter.post("/logout", logout);

export default userRouter;
