const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get("Cookie").split(";")[0].trim().split("=")[1];
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Your Orders",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("666c5374b061cb2d400269a0")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
