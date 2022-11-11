const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
//view Engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));
//set path
const staticPath = path.join(__dirname, "/public");
app.use(express.static(staticPath));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Routing
const homeRoutes = require("./routes/home");
const newRoutes = require("./routes/new");
app.use("/", homeRoutes);
app.use("/new", newRoutes);
//Error page
app.get("*", (req, res) => {
  res.render("error.hbs");
});
app.listen(8088, () => {
  console.log("Listing port number 8088");
});

