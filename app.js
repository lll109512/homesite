var express = require("express");
var nunjucks = require("nunjucks");
var socketio = require("socket.io");
const mongoose = require("mongoose");

var app = express();
nunjucks.configure("views", {
    autoescape: true,
    express: app
});

app.set("view engine", "html");

app.use("/assets", express.static("assets"));

app.get("/", function(req, res) {
    res.render("home.html");
});

app.get("/profile/:id", (req, res) => {
    res.render("profile.html", {
        person: req.params.id
    });
});

var server = app.listen(3000);
var io = socketio(server);
