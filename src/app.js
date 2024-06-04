"use strict";

const path = require("path");
const express = require("express");
const compression = require("compression");
const app = express();
const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Product = require("./models/product");
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

app.use((req,res,next) =>{{
  User.findByPk(1).then(user =>{
    req.user = user;
    next();
  }).catch((err) =>{
    console.log(err);
  })
}})

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {
  constraints: true,
  onDelete: "CASCADE", //xoa cung ap dung cho product neu xoa User
});
User.hasMany(Product);
sequelize
  // .sync({force: true})
  .sync()
  .then((result) => {
    return User.findByPk(1);
  }).then(user =>{
    if(!user){
      return User.create({name:"Osborn",email:"duy.kiet@gmail.com"});
    }
    return user;
  }).then(user =>{
    // console.log(user);
    app.listen(3000)
  })
  .catch((error) => {
    console.log(error);
  });

//  module.exports = app;
