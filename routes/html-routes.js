// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // shelters route loads shelters.html
  app.get("/shelters", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shelters.html"));
  });

  // results route loads results.html
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });

};
