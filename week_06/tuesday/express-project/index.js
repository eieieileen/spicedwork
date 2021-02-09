const express = require("express");
const app = express();
const hb = require("express-handlebars");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");