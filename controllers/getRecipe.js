const LikedRecipe = require('../models/LikedRecipe.js');
const Recipe = require('../models/Recipe.js');

module.exports = async (req, res) => {
  try {
    const detailRecipe = await Recipe.findById(req.params.id);
  
    const liked = await LikedRecipe.find({userId: loggedIn, recipeId: req.params.id})
    if (liked.length >0 ) {var isliked = true;}
   else {var isliked= false;}
    res.render('recipe', { detailRecipe,isliked });
  } catch (error) {
    // Handle errors
   
    res.status(500).send('Error fetching blog post');
  }
};
