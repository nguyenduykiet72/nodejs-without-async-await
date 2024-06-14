"use strict";
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/user");
const user = require("../models/user");
const connectionString = `mongodb://localhost:27017/nodejsMongo`;
console.log("ConnectionString:", connectionString);

const configDatabase = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .then(() => {
      User.findOne().then((user) => {
        if (!user) {
          const user = new User({
            name: "Osborn",
            email: "Osborn@gmail.com",
            cart: {
              items: [],
            },
          });
          user.save();
        }
      });
    })
    .catch((err) => console.log(err));
};

module.exports = configDatabase;
