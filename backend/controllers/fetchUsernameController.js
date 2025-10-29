import { User } from "../models/userModel.js";

export const verify = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select("-password")
      .populate({ path: "gameHistory", populate: { path: "category" } });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
