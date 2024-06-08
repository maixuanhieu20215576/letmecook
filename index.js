const express = require("express");
const ejs = require("ejs");
const app = new express();
const homeController = require("./controllers/home");
const validateMiddleWare = require("./middleware/validationMiddleware");
const newUserController = require("./controllers/newUser");
const loginController = require("./controllers/login");
const expressSession = require("express-session");
const authMiddleware = require("./middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("./middleware/redirectIfAuthenticatedMiddleware");
const logOutController = require("./controllers/logout");
const newRecipeController = require("./controllers/newRecipe");
const storeRecipeController = require("./controllers/storeRecipe");
const getRecipeController = require("./controllers/getRecipe");
const searchController = require("./controllers/search");
const likeRecipeController = require("./controllers/likeRecipe");
const LikedRecipeController = require("./controllers/liked");
const User = require('./models/User.js')
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  expressSession({
    secret: "el pulga",
  })
);
global.loggedIn = null;
app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});
global.user = null ; 
app.use("*",(req,res,next) => {
  User.findById(loggedIn)
    .then((foundUser) => {
      user = foundUser;
      next();
    })
    .catch((error) => {
      console.error("Error finding user:", error);
      user = null;
      next();
    });
})
// Thiết lập server
app.listen(4000, () => {
  console.log("App listening on port 4000");
});
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", homeController);
app.post("/", homeController);
// Hiển thị bài đăng
app.get("/recipe", (request, response) => {
  response.render("recipe");
});

//Tạo bài post mới
//const newPostController = require("./controllers/newPost");
//app.get("/posts/new", authMiddleware, newPostController);
//app.use("/posts/new", validateMiddleWare);
//app.get("/posts/new", newPostController);

// Kết nối database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/recipes");
// Duyệt data
const fileUpload = require("express-fileupload");
app.use(fileUpload());

// Đăng ký
app.get("/auth/register", newUserController);
const storeUserController = require("./controllers/storeUser");
app.post("/users/register", storeUserController);

// Đăng nhập
app.get("/auth/login", loginController);
const loginUserController = require("./controllers/loginUser");
app.post("/users/login", loginUserController);

app.get("/auth/register", redirectIfAuthenticatedMiddleware, newUserController);
app.post(
  "/users/register",
  redirectIfAuthenticatedMiddleware,
  storeUserController
);
app.get("/auth/login", redirectIfAuthenticatedMiddleware, loginController);
app.post(
  "/users/login",
  redirectIfAuthenticatedMiddleware,
  loginUserController
);

app.get("/auth/logout", logOutController);

// Tạo công thức mơis
app.get("/recipe/new", newRecipeController);
app.post("/recipe/store", authMiddleware, storeRecipeController);
app.post("/recipe/store", storeRecipeController);
app.get("/recipe/liked", LikedRecipeController);
app.post("/recipe/liked", likeRecipeController);
app.get("/recipe/:id", getRecipeController);
//Tìm kiếm
app.get("/search", (request, response) => {
  response.render("search");
});

app.post("/search", searchController);
app.use((req, res) => res.render("notfound"));
