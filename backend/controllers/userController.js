import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findOne({ username: username });

    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      password: hashedPassword,
      gameHistory: [],
    });

    if (!newUser) {
      console.log("Something went wrong! New User could not be added!");
      return res.status(500).json({
        message: "Internal Server Error!",
      });
    }

    const result = await newUser.save();

    const token = jwt.sign(
      { id: result.insertedId },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );

    res.json(token, { username: username });
  } catch (err) {
    console.error("Error during signup : ", err.message);
    res.status(500).send("Internal Server Error!");
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });

    res.json({ token, username: user.username });
  } catch (err) {
    console.error("Error during login : ", err.message);
    res.status(500).send("Internal Server Error!");
  }
};
