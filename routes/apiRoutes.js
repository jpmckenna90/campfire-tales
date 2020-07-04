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
  // ! this is really 'Scenario' value
  let encounterValue = req.params.encounter;
  let encounterArray = [];
  let encounterCardArray = [];
  //! search Scenarios to find chosen Scenario

  db.Encounter.find({ name: encounterValue }).then((response) => {
    // ! grab all the Encounters from that Scenario, and build an array from them
    encounterArray = response[0].encounters;
    // ! loop through each Encounter in the given Scenario
    encounterArray.forEach((encounter, index) => {
      // ! and find all Encounter Cards that belong to the Encounter we're currently iterating through
      db.EncounterCard.find({
        encounter: encounter,
      })
        .then((cards) => {
          cards.forEach((card) => {
            if (!encounterCardArray.includes(card.id)) {
              encounterCardArray.push(card);
            }
            console.log(encounterCardArray);
          });
          // ! if the res.json lives here, it tries to send it multiple times
          // ! which it obviously can't do. figure out how to rectify this!
        })
        .catch((err) => console.log(err));
    });
  });

  function sendData() {
    res.json(encounterCardArray);
  }

  setTimeout(sendData, 500);
});

module.exports = router;
