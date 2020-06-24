const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/boxes", (req, res) => {
  db.Encounter.distinct("box")
    .then((boxes) => res.json(boxes))
    .catch((err) => res.status(422).end());
});

router.get("/api/encounters/:box", (req, res) => {
  // console.log(req.params);
  let boxValue = req.params;
  console.log("boxValue: " + JSON.stringify(boxValue.box));
  db.Encounter.find({ box: boxValue.box })
    .then((encounter) => res.json(encounter))
    .catch((err) => res.status(422).end());
  // let box = req.query
  // db.Encounter.find()
});

module.exports = router;
