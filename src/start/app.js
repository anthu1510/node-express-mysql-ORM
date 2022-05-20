const express = require("express");
const db = require("../database");

db();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// importing routing file
require("../routes")(app);

module.exports = app;
