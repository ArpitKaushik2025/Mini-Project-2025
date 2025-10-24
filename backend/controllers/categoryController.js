import { Category } from "../models/categoryModel.js";

export const addCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const prevCategory = await Category.findOne({ name: name });

    if (prevCategory) {
      return res.status(400).json({ message: "Category already exists!" });
    }

    let newCategory;

    if (!description) {
      newCategory = new Category({
        name: name,
      });
    } else {
      newCategory = new Category({
        name: name,
        description: description,
      });
    }

    if (!newCategory) {
      console.log("Something went wrong! New Category could not be created!");
      return res.status(500).json({
        message: "Something went wrong! New Category could not be created!",
      });
    }

    await newCategory.save();

    res.status(200).json({ message: "New Category created successfully" });
  } catch (err) {
    console.error("Error during adding the category  : ", err.message);
    res.status(500).send("Server Error!");
  }
};
