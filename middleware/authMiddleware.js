const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.userId).exec();
    if (!user) {
      return res.redirect("/");
    }
    next();
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).send("Error finding user");
  }
};
