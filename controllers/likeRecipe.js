const LikedRecipe = require("../models/LikedRecipe.js");

module.exports = async (req, res) => {

  if (req.body.isliked == 'false') {
    try {
      await LikedRecipe.deleteOne({
        recipeId: req.body.recipeId,
        userId: req.body.userId,
      });
     
      res.sendStatus(200); // Send a success response if deletion is successful
    } catch (error) {
      console.log("Error occurred while delete record:", error);
      res.status(500).send("Error occurred while delete record");
    }
  } else if (req.body.isliked == 'true') {
    const likedRecipe = new LikedRecipe(req.body);
    likedRecipe
      .save()
      .then(() => {
        res.sendStatus(200); // Send a success response if creation is successful
      })
      .catch((error) => {
        console.log("Error occurred while creating new record:", error);
        res.status(500).send("Error occurred while creating new record");
      });
  }
};
