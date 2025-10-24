import { Room } from "../models/roomModel.js";
import { Category } from "../models/categoryModel.js";
import { User } from "../models/userModel.js";

export const addRoom = async (req, res) => {
  try {
    const { roomId, categoryName, players, winnerName, startedAt } = req.body;

    const category = await Category.findOne({ name: categoryName });
    const winner = await User.findOne({ username: winnerName });

    let roomPlayers = [];

    players.forEach(async (playerObject) => {
      const player = await User.findOne({ username: playerObject.name });
      const newPlayer = {
        userId: player._id,
        username: playerObject.name,
        score: playerObject.score,
      };
      roomPlayers.push(newPlayer);
    });

    if (!category || !winner || roomPlayers.length === 0) {
      console.log("Something went wrong! Could not add room to DB!");
      return res.status(500).json("Internal Server Error!");
    }

    const newRoom = new Room({
      roomId: roomId,
      category: category._id,
      players: roomPlayers,
      winner: winner._id,
      startedAt: startedAt,
    });

    if (!newRoom) {
      console.log("Something went wrong! Could not add room to DB!");
      return res.status(500).json("Internal Server Error!");
    }

    await newRoom.save();

    res.status(200).json({ message: "Room successfully added to DB!" });
  } catch (err) {
    console.error("Error during adding the room  : ", err.message);
    res.status(500).send("Internal Server Error!");
  }
};
