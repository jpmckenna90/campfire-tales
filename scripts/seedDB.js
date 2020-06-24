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
  {
    box: "Core Set",
    name: "Journey Along the Anduin",
    encounters: [
      "Dol Guldur Orcs",
      "Journey Along the Anduin",
      "Sauron's Reach",
      "Wilderlands",
    ],
  },
  { box: "Core Set", name: "Escape from Dol Guldur" },
  {
    box: "Shadows of Mirkwood",
    name: "The Hunt for Gollum",
    encounters: [
      "Journey Along the Anduin",
      "Sauron's Reach",
      "The Hunt for Gollum",
    ],
  },
  { box: "Shadows of Mirkwood", name: "Conflict at the Carrock" },
  { box: "Shadows of Mirkwood", name: "A Journey to Rhosgobel" },
  { box: "Shadows of Mirkwood", name: "The Hills of Emyn Muil" },
  { box: "Shadows of Mirkwood", name: "The Dead Marshes" },
  { box: "Shadows of Mirkwood", name: "Return to Mirkwood" },
  {
    box: "Khazad-dum",
    name: "Into the Pit",
    encounters: [
      "Goblins of the Deep",
      "Hazards of the Pit",
      "Into the Pit",
      "Twists and Turns",
    ],
  },
  { box: "Khazad-dum", name: "The Seventh Level" },
  { box: "Khazad-dum", name: "Flight from Moria" },
  {
    box: "Dwarrowdelf",
    name: "The Redhorn Gate",
    encounters: ["Misty Mountains", "The Redhorn Gate"],
  },
  { box: "Dwarrowdelf", name: "Road to Rivendell" },
  { box: "Dwarrowdelf", name: "The Watcher in the Water" },
  { box: "Dwarrowdelf", name: "The Long Dark" },
  { box: "Dwarrowdelf", name: "Foundations of Stone" },
  { box: "Dwarrowdelf", name: "Shadow and Flame" },
];

const encounterCardSeed = [
  {
    encounter: "Dol Guldur Orcs",
    type: "Enemy",
    name: "Chieftan Ufthak",
    unique: false,
    traits: ["Dol Guldur", "Orc"],
    engagement: 35,
    threat: 2,
    attack: 3,
    defense: 3,
    health: 6,
    text:
      "Chieftan Ufthak gets +2 attack for each resource token on him. <b>Forced</b>: After Chieftan Ufthak attacks, place 1 resource token on him.",
    victory: 4,
  },
  {
    encounter: "Journey Along the Anduin",
    type: "Treachery",
    name: "Massing at Night",
    unique: false,
    text:
      "<b>When Revealed:</b> Reveal X additional cards from the encounter deck. X is the number of players in the game.",
    shadow:
      "<b>Shadow:</b> Deal X shadow cards to this attacker. X is the number of players in the game.",
  },
  {
    encounter: "Into the Pit",
    type: "Location",
    name: "Bridge of Khazad-dum",
    unique: true,
    traits: ["Underground", "Bridge"],
    threat: 3,
    text:
      "While Bridge of Khazad-dum is the active location, players cannot play cards.",
    flavor:
      "At the end of the hall the floor vanished and fell to an unknown depth. The outer door could only be reached by a slender bridge of stone, without kerb or rail, that spanned the chasm with one curving spring of fifty feet. -The Fellowship of the Ring",
    victory: 2,
  },
  {
    encounter: "Misty Mountains",
    type: "Enemy",
    name: "Mountain Warg",
    unique: false,
    traits: ["Creature"],
    engagement: 30,
    threat: 2,
    attack: 4,
    defense: 2,
    health: 4,
    text:
      "If Mountain Warg is dealt a shadow card with no effect, return Mountain Warg to the staging area after it attacks.",
    shadow:
      "<b>Shadow: </b>Attacking enemy gets +1 attack. (+2 instead if a <b>Mountain</b> is the active location.)",
  },
];

// db.EncounterCard.collection
//   .insertMany(encounterCardSeed)
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

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
