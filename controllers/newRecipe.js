module.exports = (req, res) => {
  if (req.session.userId) return res.render("createrecipe");
  else return res.render("/auth/login");
};
