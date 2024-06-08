const LikedRecipe = require("../models/LikedRecipe.js");
const Recipe = require('../models/Recipe.js');

module.exports = (req, res) => {
    let output = [];
    LikedRecipe.find({ userId: loggedIn })
        .then((likedrecipes) => {
            // Lặp qua mảng likedrecipes và tạo mảng các Promise
            const promises = likedrecipes.map(likedRecipe => {
                return Recipe.findById(likedRecipe.recipeId);
            });

            // Kết hợp tất cả các Promise và xử lý kết quả
            return Promise.all(promises);
        })
        .then((recipes) => {
            // Gán kết quả vào output
            output = recipes;
            // Render template với dữ liệu đã được lấy
            res.render("liked", {
                output: output,
            });
        })
        .catch((error) => {
            console.error("Error finding liked recipes:", error);
            res.status(500).send("Error finding liked recipes");
        });
};
