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
      });
  });

  // Return all pets records in the database
  app.get("/api/pets", function (req, res) {
    db.pets.findAll({})
      .then(data => res.json(data))
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

    // GET all 'cat' pet records
    app.get("/api/cats", function (req, res) {
      db.pets.findAll({
        where: {
          animal: "cat"
        }
      }).then(function (data) {
        res.json(data);
      });
    });
  
    // GET all 'dog' pet records
    app.get("/api/dogs", function (req, res) {
      db.pets.findAll({
        where: {
          animal: "dog"
        }
      }).then(function (data) {
        res.json(data).catch(err => {
          rest.sendStatus(500);
        });
      });
    });
  
    // GET all 'other' pet records
    app.get("/api/others", function (req, res) {
      db.pets.findAll({
        where: {
          animal: "other"
        }
      }).then(function (data) {
        res.json(data).catch(err => {
          rest.sendStatus(500);
        });
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

    // Get all pets postings in ASC order
    app.get("/api/asc", function (req, res) {
      db.pets.findAll({
        order: [
          ['createdAt', 'ASC']
        ]
      }).then(function (data) {
        res.json(data);
      }).catch(function (err) {
        res.json(err);
      });
    });
  
  // Delete a specific pet record
  app.delete("/api/delete", function (req, res) {
    db.pets.destroy({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });

  });
}