const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/rings", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const encounterSeed = [
  {
    box: "Core Set",
    name: "Passage Through Mirkwood",
  },
  { box: "Core Set", name: "Journey Along the Anduin" },
  { box: "Core Set", name: "Escape from Dol Guldur" },
  { box: "Shadows of Mirkwood", name: "The Hunt for Gollum" },
  { box: "Shadows of Mirkwood", name: "Conflict at the Carrock" },
  { box: "Shadows of Mirkwood", name: "A Journey to Rhosgobel" },
  { box: "Shadows of Mirkwood", name: "The Hills of Emyn Muil" },
  { box: "Shadows of Mirkwood", name: "The Dead Marshes" },
  { box: "Shadows of Mirkwood", name: "Return to Mirkwood" },
  { box: "Khazad-dum", name: "Into the Pit" },
  { box: "Khazad-dum", name: "The Seventh Level" },
  { box: "Khazad-dum", name: "Flight from Moria" },
  { box: "Dwarrowdelf", name: "The Redhorn Gate" },
  { box: "Dwarrowdelf", name: "Road to Rivendell" },
  { box: "Dwarrowdelf", name: "The Watcher in the Water" },
  { box: "Dwarrowdelf", name: "The Long Dark" },
  { box: "Dwarrowdelf", name: "Foundations of Stone" },
  { box: "Dwarrowdelf", name: "Shadow and Flame" },
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
