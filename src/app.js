const path = require("path");
const express = require("express");
const compression = require("compression");
const app = express();
const errorController = require("./controllers/error");
const db = require("./util/database");

app.use(compression());
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404); 

app.listen(3000);


// module.exports = app;