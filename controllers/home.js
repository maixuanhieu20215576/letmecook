const Recipe = require("../models/Recipe.js");
const User = require('../models/User.js')
module.exports = (req, res) => {
  Recipe.find({})
    .then((recipes) => {
      res.render("index", {
        recipes: recipes,
       
      });
    })
    .catch((error) => {
      console.error("Error finding blog posts:", error);
      res.status(500).send("Error finding blog posts");
    });
  
};
