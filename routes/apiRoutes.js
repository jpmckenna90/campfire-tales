const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/encounters", (req, res) => {
  console.log('route reached');
  db.Encounter.find({})
    .then((encounters) => res.json(encounters))
    .catch((err) => res.status(422).end());
});

module.exports = router;
