const express = require("express");
const app = express();
const route = express.Router();
const hbs = require("hbs");
var bodyParser = require("body-parser");
const { text } = require("express");
app.use(bodyParser.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi Students,Get your files checked.",
    user: "Dharmendra(Chief Proctor)",
    date: new Date(),
  },
  {
    text: "I will change all rules",
    user: "HOS-Thada",
    date: new Date(),
  },
  {
    text: "I won't follow any of these :)",
    user: "Anuradha",
    date: new Date(),
  },
];
route.get("/", (req, res) => {
  res.render("index.hbs", { messages: messages });
});
route.get("/new", (req, res) => {
  res.render("form.hbs");
});
route.post("/new", (req, res, next) => {
  messages.push({
    user: req.body.user,
    text: req.body.text,
    date: new Date(),
  });
  res.redirect("/");
});

module.exports = route;

