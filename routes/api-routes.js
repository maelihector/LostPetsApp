var db = require("../models");

module.exports = function(app) {
  //Create Posting
  app.post("/api/pets", function(req,res) {
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
    }).then(data => {
      res.status(201).send(data).end();
    })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  });

  //View Postings
  app.get("/api/pets", function(req, res) {
    db.pets.findAll().then(data => {
      //for (let i = 0; i < data.length; i += 1) {
        //console.log(data[i].dataValues);
      //}
      res.status(200).send(data).end();
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  });


}