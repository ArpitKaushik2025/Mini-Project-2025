import { GameHistory } from "../models/gameHistoryModel.js";
import { Category } from "../models/categoryModel.js";
import { User } from "../models/userModel.js";

export const addHistory = async (req, res) => {
  try {
    const { username, categoryName, playedAt, score } = req.body;

    const user = await User.findOne({ username: username });
    const category = await Category.findOne({ name: categoryName });

    if (!user || !category) {
      console.log("Something went wrong! Could not update game history!");
      return res.status(500).json("Internal Server Error!");
    }

    const gameHistory = new GameHistory({
      userId: user._id,
      category: category._id,
      playedAt: playedAt,
      score: score,
    });

    if (!gameHistory) {
      console.log("Something went wrong! Game History could not be updated!");
      return res.status(500).json({
        message: "Internal Server Error!",
      });
    }

    await gameHistory.save();

    res.status(200).json({ message: "Game History updated successfully!" });
  } catch (err) {
    console.error("Error during updating the game history  : ", err.message);
    res.status(500).send("Internal Server Error!");
  }
};
