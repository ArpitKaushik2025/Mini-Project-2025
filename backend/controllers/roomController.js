import { Room } from "../models/roomModel.js";
import { Category } from "../models/categoryModel.js";
import { User } from "../models/userModel.js";

export const addRoom = async (req, res) => {
  try {
    const { roomId, categoryName, players, winnerName, startedAt } = req.body; // Extracting data from request body

    const category = await Category.findOne({ name: categoryName }); // Find category to get id for reference
    const winner = await User.findOne({ username: winnerName }); // Find winner user to get id for reference

    let roomPlayers = [];

    // Access each object of players array
    players.forEach(async (playerObject) => {
      const player = await User.findOne({ username: playerObject.name }); // Find each player to get id for reference

      // Create new player object
      const newPlayer = {
        userId: player._id,
        username: playerObject.name,
        score: playerObject.score,
      };

      // Add new player to the array of room players
      roomPlayers.push(newPlayer);
    });

    // Throw error if category, winner could not be fetched or room players array stays empty
    if (!category || !winner || roomPlayers.length === 0) {
      console.log("Something went wrong! Could not add room to DB!");
      return res.status(500).json("Internal Server Error!");
    }

    // New Room Object to be added in DB
    const newRoom = new Room({
      roomId: roomId,
      category: category._id,
      players: roomPlayers,
      winner: winner._id,
      startedAt: startedAt,
    });

    // Throw error if new room object could not be created
    if (!newRoom) {
      console.log("Something went wrong! Could not add room to DB!");
      return res.status(500).json("Internal Server Error!");
    }

    // Upload new room object to DB
    await newRoom.save();

    // Send response with success message
    res.status(200).json({ message: "Room successfully added to DB!" });
  } catch (err) {
    console.error("Error during adding the room  : ", err.message);
    res.status(500).send("Internal Server Error!");
  }
};
