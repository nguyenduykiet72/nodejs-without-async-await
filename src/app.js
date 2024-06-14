"use strict";
const path = require("path");
const express = require("express");
const compression = require("compression");
const app = express();
const errorController = require("./controllers/error");
const User = require("./models/user");
require("dotenv").config();

app.use(compression());
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  User.findById("666c5374b061cb2d400269a0")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

const databaseMongo = require("./util/database");
databaseMongo();

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
app.listen(8080);

// module.exports = app;
