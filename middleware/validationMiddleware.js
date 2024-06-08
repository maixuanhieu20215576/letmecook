module.exports = (req, res, next) => {
  if (!req.files || !req.body || !req.body.title) {
    return res.redirect("/recipe/new");
  }
  next();
};
