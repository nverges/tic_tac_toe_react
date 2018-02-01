// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
// const Sequelize = require('sequelize');

// Require History Schema
// const Article = require("./models/Article.js");

///////////////// Initialize Express /////////////////
const app = express();
const router = express.Router();

// Pass router into routes file
require("./routes/api-routes")(router);

// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Declares Express static folder
app.use(express.static("public"));

// Use Router
app.use(router);



// Requiring our models for syncing
// var db = require("./models");

// // Listener
// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });
  

// db.sequelize.sync({ force: false }).then(function() {
//     app.listen(PORT, function() {
//         console.log("App listening on PORT " + PORT);
//     });
// });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});