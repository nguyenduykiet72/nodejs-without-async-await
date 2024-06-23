"use strict";
require("dotenv").config();
const mongoose = require("mongoose");
const connectionString = process.env.MONGODB;
console.log("ConnectionString:", connectionString);

const configDatabase = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((err) => console.log(err));
};

module.exports = configDatabase;
