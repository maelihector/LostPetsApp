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
        img: req.body.img,
        comment: req.body.comment,
        email: req.body.email,
        password: req.body.password
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
          zip: req.body.zip,
          lost: req.body.lost,
        }
      }).then(data => res.json(data))
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

   // Get all pets postings
   app.get("/api/desc", function(req, res){
    db.pets.findAll({
      order: [['createdAt', 'DESC']]
    }).then(function(data) {
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

  // Delete a specific pet record
  app.post("/api/delete", function (req, res) {
    db.pets.destroy({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  // GET a specific pet record
  app.get("/api/:pets", function (req, res) {
    db.pets.findAll({
        where: {
          id: req.params.id
        }
      }).then(data => res.sendStatus(200))
      .catch(err => {
        console.log(data);
        console.log(err);
        res.sendStatus(500);
      });
  });

}