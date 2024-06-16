exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Your Orders",
    isAuthenticated: req.isLoggedIn,
  });
};


exports.postLogin = (req, res, next) => {
  res.isLoggedIn = true;
  res.redirect("/");
};