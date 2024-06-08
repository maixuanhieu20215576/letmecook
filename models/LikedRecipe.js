const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikedRecipeSchema = new Schema({
userId: String,
recipeId: String,
});

module.exports = mongoose.model("LikedRecipe", LikedRecipeSchema);
