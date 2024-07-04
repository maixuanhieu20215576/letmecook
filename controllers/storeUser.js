const User = require("../models/User.js");

module.exports = (req, res) => {
  
  User.findOne({ username: req.body.username })
    .then((existingUser) => {
      if (existingUser) {
        return res.render('register', { err: 1});
      } else {
        if (req.body.password.length < 6) {
          return res.render('register', { err: 2});
        } else {

          return User.create(req.body)
            .then((user) => {
              res.redirect("/"); 
            })
            .catch((error) => {
              console.error("Error creating user:", error);
              res.status(500).send("Error creating user");
            });
        }
      }
    })
    .catch((error) => {
     
      console.error("Error finding user:", error);
      res.status(500).send("Error finding user");
    });
};