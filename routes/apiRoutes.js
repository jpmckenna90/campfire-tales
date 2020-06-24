const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/boxes", (req, res) => {
  db.Encounter.distinct("box")
    .then((boxes) => res.json(boxes))
    .catch((err) => res.status(422).end());
});

router.get("/api/encounters/:box", (req, res) => {
  let boxValue = req.params;
  console.log("boxValue: " + JSON.stringify(boxValue.box));
  db.Encounter.find({ box: boxValue.box })
    .then((encounter) => res.json(encounter))
    .catch((err) => res.status(422).end());
});

router.get("/api/encountercards/:encounter", (req, res) => {
  console.log("encounterCards route hit");
  let encounterValue = req.params.encounter;
  let encounterArray = [];
  db.Encounter.find(
    { name: encounterValue }
    // { box: 1, name: 1, encounters: 1 }
  ).then((res) => {
    encounterArray = res[0].encounters
    console.log(encounterArray);
  });

  db.EncounterCard.find({
    encounter: encounterValue.encounter,
  })
    .then((encounterCards) => res.json(encounterCards))
    .catch((err) => res.status(422).end());
});

module.exports = router;
