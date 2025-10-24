import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const { username, password } = req.body; // Extract data from request body

    // Throw error if username or password does not exist in request body
    if (!username || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if user already exists
    const user = await User.findOne({ username: username });

    // Send response with desired message if user exists
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10); // Generate salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    // New User Object
    const newUser = new User({
      username: username,
      password: hashedPassword,
      gameHistory: [],
    });

    // Throw error if new user object could not be created
    if (!newUser) {
      console.log("Something went wrong! New User could not be added!");
      return res.status(500).json({
        message: "Internal Server Error!",
      });
    }

    // Upload the new user object in DB
    const result = await newUser.save();

    // Generate a token
    const token = jwt.sign(
      { id: result.insertedId },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );

    // Send response with token and username
    res.json(token, { username: username });
  } catch (err) {
    console.error("Error during signup : ", err.message);
    res.status(500).send("Internal Server Error!");
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body; // Extracting data from request body

    // Throw error if username or password do not exist in request body
    if (!username || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Find user in database
    const user = await User.findOne({ username: username });

    // Throw error if user does not exist
    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    // Compare the entered password with password in db
    const isMatch = await bcrypt.compare(password, user.password);

    // Send desired response if passwords don't match
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    // Generate a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });

    // Send the token & username in response
    res.json({ token, username: user.username });
  } catch (err) {
    console.error("Error during login : ", err.message);
    res.status(500).send("Internal Server Error!");
  }
};
