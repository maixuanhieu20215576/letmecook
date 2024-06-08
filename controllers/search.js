const Recipe = require("../models/Recipe.js");

module.exports = async (req, res) => {
  console.log(req.body);

  if (req.body.ingre === "") {
    const input = req.body.input;
    const ingredientsArray = input
      .split(",")
      .map((item) => item.trim().toLowerCase());

    try {
      result = await Recipe.find({}).exec();

       result = result.filter((recipe) => {
        for (let ingredient of ingredientsArray) {
          if (!recipe.ingredient.toLowerCase().includes(ingredient)) {
            return false;
          }
        }
        return true;
      });
      res.render("result", { filteredRecipes: result });
      return; // Exit the function after sending the response
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
      res
        .status(500)
        .json({ success: false, message: "Đã xảy ra lỗi khi tìm kiếm." });
      return; // Exit the function after sending the response
    }
  }

  if (req.body.food === "") {
    result = await Recipe.find({
      name: { $regex: new RegExp(req.body.input, "i") },
    });
    res.render("result", { filteredRecipes: result });
    return; // Exit the function after sending the response
  }

  if (req.body.timeOption == 0) {
    if (req.body.numberOption == 0) {
      res.render("filter", { filteredRecipes: result });
      return; // Exit the function after sending the response
    }
    if (req.body.numberOption === 1) {
      let filteredRecipes = await result.filter(function (recipe) {
        return recipe.number <= 2;
      });
      console.log(filteredRecipes);
      res.render("filter", { filteredRecipes: filteredRecipes });
      return; // Exit the function after sending the response
    }
    if (req.body.numberOption === 2) {
     let filteredRecipes =await result.filter(function (recipe) {
        return (recipe.number - 3) * (recipe.number - 6) <= 0;
      });
      console.log(filteredRecipes);

      res.render("filter", { filteredRecipes: filteredRecipes });
      return; // Exit the function after sending the response
    }
    if (req.body.numberOption === 3) {
    let   filteredRecipes = await result.filter(function (recipe) {
        return recipe.number > 6;
      });
      res.render("filter", { filteredRecipes: filteredRecipes });
      return; // Exit the function after sending the response
    }
  }
};