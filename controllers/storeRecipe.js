const Recipe = require('../models/Recipe.js');
const path = require('path');

module.exports = async (req, res) => {
    try {
        let image = req.files.image;
        await image.mv(path.resolve(__dirname, '..', 'public', 'upload', image.name));


        // Tạo một Recipe mới
        const newRecipe = new Recipe({
            ...req.body,
            image: '/upload/' + image.name
        });

        // Lưu Recipe vào cơ sở dữ liệu
        await newRecipe.save();

        // Chuyển hướng sau khi lưu thành công
        res.redirect('/');
    } catch (error) {
        console.error('Error creating recipe:', error);
        res.status(500).send('Internal Server Error');
    }
};
