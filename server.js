
const {engine } = require("express-handlebars");
const express = require('express');
const db = require('./data/reddit-db');
//import postData from './controllers/posts';

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/views/posts-new.handlebars", (req, res) => {
  res.render("posts-new");
});

app.post("/posts/new", (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(3000);
