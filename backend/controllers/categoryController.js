import { Category } from "../models/categoryModel.js";

export const addCategory = async (req, res) => {
  try {
    const { name, description } = req.body; // Extracting data from request body

    const prevCategory = await Category.findOne({ name: name }); // Checking if category already exists

    if (prevCategory) {
      return res.status(400).json({ message: "Category already exists!" }); // If category already exists, send desired response
    }

    let newCategory;

    // Creating new category object to be stored in DB
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

    // If something fails in creating new category object, throw error
    if (!newCategory) {
      console.log("Something went wrong! New Category could not be created!");
      return res.status(500).json({
        message: "Internal Server Error!",
      });
    }

    // Upload the new category object in DB
    await newCategory.save();

    // Send the response with success message
    res.status(200).json({ message: "New Category created successfully" });
  } catch (err) {
    console.error("Error during adding the category  : ", err.message);
    res.status(500).send("Internal Server Error!");
  }
};

export const fetchCategories = async (req, res) => {
  const categories = await Category.find({});

  if (!categories) {
    console.log("Error Occurred in fetching the categories from DB!");
    return res.status(500).json({ message: "Internal Server Error" });
  }

  res.json(categories);
};
