"use strict";
const mongoose = require("mongoose");
require("dotenv").config();
const connectionString = process.env.MONGODB_URI;
console.log("ConnectionString:", connectionString);

const configDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to Mongo Successfully");
    })
    .catch((error) => {
      console.log("Error connecting to Mongodb", error);
    });
};

module.exports = configDatabase;
