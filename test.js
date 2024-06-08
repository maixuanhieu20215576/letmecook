const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/blogposts')
BlogPost.create({
    title: "test",
    body: "test body"
})

.catch(error => {
    console.error("Error creating blog post:", error);
});