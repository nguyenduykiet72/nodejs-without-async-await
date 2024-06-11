"use strict";

const path = require("path");
const express = require("express");
const compression = require("compression");
const app = express();
const errorController = require("./controllers/error");

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
  // {
  //   User.findByPk(1)
  //     .then((user) => {
  //       req.user = user;
  //       next();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
app.listen(3000);