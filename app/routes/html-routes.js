// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // index route loads index.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // pets route loads pets.html. AKA Results.html
  app.get("/pets", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pets.html"));
  });

  // all route loads all.html
  app.get("/all", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });

  // shelters route loads shelters.html
  app.get("/shelters", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/shelters.html"));
  });

  // lost route loads lost.html
  app.get("/lost", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/lost.html"));
  });

  // found route loads found.html
  app.get("/found", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/found.html"));
  });

};