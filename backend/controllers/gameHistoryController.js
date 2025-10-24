import { GameHistory } from "../models/gameHistoryModel.js";
import { Category } from "../models/categoryModel.js";
import { User } from "../models/userModel.js";

export const addHistory = async (req, res) => {
  try {
    const { username, categoryName, playedAt, score } = req.body; // Extracting data from request body

    const user = await User.findOne({ username: username }); // Find user from username given to get the id for reference
    const category = await Category.findOne({ name: categoryName }); // Find category from category name given to get the id for reference

    // Throw error if user or category could not be found
    if (!user || !category) {
      console.log("Something went wrong! Could not update game history!");
      return res.status(500).json("Internal Server Error!");
    }

    // New game history object to be stored in DB
    const gameHistory = new GameHistory({
      userId: user._id,
      category: category._id,
      playedAt: playedAt,
      score: score,
    });

    // Throw error if game history object could not be formed
    if (!gameHistory) {
      console.log("Something went wrong! Game History could not be updated!");
      return res.status(500).json({
        message: "Internal Server Error!",
      });
    }

    // Upload the game history object in DB
    await gameHistory.save();

    // Send response with success message
    res.status(200).json({ message: "Game History updated successfully!" });
  } catch (err) {
    console.error("Error during updating the game history  : ", err.message);
    res.status(500).send("Internal Server Error!");
  }
};
