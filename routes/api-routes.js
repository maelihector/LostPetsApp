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
<<<<<<< HEAD
=======

>>>>>>> 2a6a774a81cd1358d882bd00a35173719f154d3d
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
    }).catch(function (err) {
      res.json(err);
    });
  });

  // Get all pets postings in DESC order
  app.get("/api/desc", function (req, res) {
    db.pets.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
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
    }).catch(function (err) {
      res.json(err);
    });
  });

  // View (lost === 0 (not true) ) pets
  app.get("/api/found", function (req, res) {
    db.pets.findAll({
      where: {
        lost: 0
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });
  });

  // Delete a specific pet record
  app.delete("/api/pets/:id", function (req, res) {
    db.pets.destroy({
      where: {
        id: req.params.id,
        email: req.body.email,
        password: req.body.password
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });

  });

  // GET a specific pet record
  app.get("/api/pets/:id", function (req, res) {
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