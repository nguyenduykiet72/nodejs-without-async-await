"use strict";
require('dotenv').config()
const mongoose = require("mongoose");
const connectionString = `mongodb://localhost:27017/nodejsMongo`;
console.log("ConnectionString:", connectionString);

const configDatabase = () => {
  mongoose.connect(process.env.MONGODB).then(() => {
    console.log("Connected to MongoDB successfully");
  }).then(() =>{
  }).catch(err => console.log(err))
}

module.exports = configDatabase;
