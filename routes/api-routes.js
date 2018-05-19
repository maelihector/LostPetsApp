var db = require("../models");

module.exports = function (app) {
  //Create Posting
  app.post("/api/pets", function (req, res) {
    db.pets.create({
      animal: req.body.animal,
      color: req.body.color,
      size: req.body.size,
      zip: req.body.zip,
      lost: req.body.lost,
      date: req.body.date,
      img: req.body.img,
      comment: req.body.comment,
      name: req.body.name,
      email: req.body.email
    }).then(data => res.sendStatus(200))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  });

  //View Postings With Filters
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

  // Get all pets postings
  app.get("/api/all", function (req, res) {
    db.pets.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // View (lost === 1 (true) ) pets
  app.get("/api/lost", function (req, res) {
    db.pets.findAll({
      where: {
        lost: 1
      }
    }).then(function (data) {
      res.json(data);
    })
  });

  // View (lost === 0 (not true) ) pets
  app.get("/api/found", function (req, res) {
    db.pets.findAll({
      where: {
        lost: 0
      }
    }).then(function (data) {
      res.json(data);
    })
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.post("/api/delete/:id", function (req, res) {
    console.log("Pet Data:");
    console.log(req.body);
    db.pets.destroy({
        where: {
          id: req.body.id
        }
      }).then(data => res.sendStatus(200))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  });

}