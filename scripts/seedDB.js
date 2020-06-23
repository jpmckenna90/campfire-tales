const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/rings", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const encounterSeed = [
  {
    box: "Core Set",
    name: "Passage Through Mirkwood",
  },
  { box: "Core Set", name: "Journey Along the Anduin" },
  { box: "Core Set", name: "Escape from Dol Guldur" },
];

db.Encounter.collection
  .insertMany(encounterSeed)
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
