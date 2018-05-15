var db = require("../models");

module.exports = function(app) {
  //Create Posting
  app.post("/api/pets", function(req,res) {
    db.pets.create({
      animal: req.body.animal,
      color: req.body.color,
      size: req.body.size,
      zip: req.body.zip,
      status: req.body.status,
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
  app.get("/api/pets", function(req, res) {
    db.pets.findAll({
      where: {
        animal: req.body.animal,
        color: req.body.color,
        size: req.body.size,
        zip: req.body.zip,
        status: req.body.status,
        date: req.body.date,
      }
    }).then(data => res.sendStatus(200))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  });


}