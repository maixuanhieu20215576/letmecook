const Recipe = require("../models/Recipe.js");

module.exports = async (req, res) => {
  console.log(req.body);

  if (req.body.ingre =='') {
    const input = req.body.input;
    const ingredientsArray = input.split(",").map((item) => item.trim().toLowerCase());

    try {
      let result = await Recipe.find({}).exec();

      result = result.filter((recipe) => {
        for (let ingredient of ingredientsArray) {
          if (!recipe.ingredient.toLowerCase().includes(ingredient)) {
            return false;
          }
        }
        return true;
      });

      if (req.body.timeFilter == 'quick') {
        result = result.filter(function (recipe) {
          return recipe.time <= 15;
        });
      }
      if (req.body.timeFilter == 'medium') {
        result = result.filter(function (recipe) {
          return (recipe.time - 15) * (recipe.time - 45) <=0;
        });
      }
      if (req.body.timeFilter == 'long') {
        result = result.filter(function (recipe) {
          return recipe.time >=45;
        });
      }
      if (req.body.numberFilter == '12') {
        result = result.filter(function (recipe) {
          return recipe.number <= 2;
        });
      }
      if (req.body.numberFilter == '36') {
        result = result.filter(function (recipe) {
          return (recipe.number - 3) * (recipe.number - 6) <= 0;
        });
      }
      if (req.body.numberFilter == '6') {
        result = result.filter(function (recipe) {
          return recipe.number > 6;
        });
      }
   
     res.render("result", {filteredRecipes: result});
      
    } catch (error) {
      console.error("Error during search:", error);
      res.status(500).json({ success: false, message: "An error occurred during the search." });
    }
  }

   else if (req.body.food =='') {
    try {
      let result = await Recipe.find({
        name: { $regex: new RegExp(req.body.input, "i") },
      }); 
     
      // here
      if (req.body.timeFilter == 'quick') {
        result = result.filter(function (recipe) {
          return recipe.time <= 15;
        });
      }
      if (req.body.timeFilter == 'medium') {
        result = result.filter(function (recipe) {
          return (recipe.time - 15) * (recipe.time - 45) <=0;
        });
      }
      if (req.body.timeFilter == 'long') {
        result = result.filter(function (recipe) {
          return recipe.time >=45;
        });
      }
      if (req.body.numberFilter == '12') {
        result = result.filter(function (recipe) {
          return recipe.number <= 2;
        });
      }
      if (req.body.numberFilter == '36') {
        result = result.filter(function (recipe) {
          return (recipe.number - 3) * (recipe.number - 6) <= 0;
        });
      }
      if (req.body.numberFilter == '6') {
        result = result.filter(function (recipe) {
          return recipe.number > 6;
        });
      }
     
      res.render("result", {filteredRecipes: result});
      

    } catch (error) {
      console.error("Error during search:", error);
      res.status(500).json({ success: false, message: "An error occurred during the search." });
    }
  }
};
