var db = require("../models");

module.exports = function (app) {
  //Create Posting
  app.post("/api/new", function (req, res) {
    db.pets.create({
        animal: req.body.animal,
        color: req.body.color,
        size: req.body.size,
        zip: req.body.zip,
        lost: req.body.lost,
        date: req.body.date,
        img: req.body.img,
        comment: req.body.comment
      }).then(data => res.sendStatus(200))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  });

  //View Postings
  app.get("/api/pets", function (req, res) {
    db.pets.findAll({
        where: {
          animal: req.body.animal,
          color: req.body.color,
          size: req.body.size,
          zip: req.body.zip,
          lost: req.body.lost,
          date: req.body.date,
        }
      }).then(data => res.sendStatus(200))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  });

  // View (lost === 1 (true) ) pets
  app.get("/api/lost", function (req, res) {
    db.pets.findAll({
      where: {
        lost: 1
      }
    }).then(function (results) {
      res.json(results);
    })
  });

  // View (lost === 0 (not true) ) pets
  app.get("/api/found", function (req, res) {
    db.pets.findAll({
      where: {
        lost: 0
      }
    }).then(function (results) {
      res.json(results);
    })
  });

}