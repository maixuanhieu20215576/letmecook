const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: Number,
  description: {
    type: String,
  },
  time: Number,
  ingredient: String,
  recipe: String,
  image: String,
});

module.exports = mongoose.model("Recipe", recipeSchema);
