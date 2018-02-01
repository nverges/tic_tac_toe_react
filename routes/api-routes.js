// Include Server Dependencies
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const logger = require("morgan");

var db = require('../models');

module.exports = function(router) {

    router.get("/", function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });

}
