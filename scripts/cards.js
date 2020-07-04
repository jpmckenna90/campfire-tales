const coreSet = [
  {
    encounter: "Dol Guldur Orcs",
    type: "Enemy",
    name: "Dol Guldur Orcs",
    unique: false,
    traits: ["Dol Guldur. Orc."],
    engagement: 10,
    threat: 2,
    attack: 2,
    defense: 0,
    health: 3,
    text:
      "When Revealed: The first player chooses 1 character currently commited to a quest. Deal 2 damage to that character.",
    shadow:
      "Attacking enemy gets +1 attack. (+3 Attack instead if this attack is undefended.)",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Dol-Guldur-Orcs-Enemy.jpg",
  },
  {
    encounter: "Dol Guldur Orcs",
    type: "Enemy",
    name: "Chieftain Ufthak",
    unique: false,
    traits: ["Dol Guldur. Orc."],
    engagement: 35,
    threat: 2,
    attack: 3,
    defense: 3,
    health: 6,
    text:
      "Chieftain Ufthak gets +2 attack for each resource token on him. Forced: After Chieftain Ufthak attacks, place 1 resource token on him.",
    victory: 4,
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Chieftan-Ufthak.jpg",
  },
  {
    encounter: "Dol Guldur Orcs",
    type: "Enemy",
    name: "Dol Guldur Beastmaster",
    unique: false,
    traits: ["Dol Guldur. Orc."],
    engagement: 35,
    threat: 2,
    attack: 3,
    defense: 1,
    health: 5,
    text:
      "Forced: When Dol Guldur Beastmaster attacks, deal it 1 additional shadow card.",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Dol-Guldur-Beastmaster.jpg",
  },
  {
    encounter: "Dol Guldur Orcs",
    type: "Treachery",
    name: "Driven by Shadow",
    unique: false,
    text:
      "When Revealed: Each enemy and each location currently in the staging area gets +1 threat until the end of the phase. If there are no cards in the staging area, Driven by Shadow gains surge.",
    shadow:
      "Choose and discard 1 attachment from the defending character. (If this attack is undefended, discard all attachments you control.)",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Driven-by-Shadow.jpg",
  },
  {
    encounter: "Dol Guldur Orcs",
    type: "Treachery",
    name: "The Necromancer's Reach",
    unique: false,
    text: "When Revealed: Deal 1 damage to each exhausted character.",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/The-Necromancer's-Reach.jpg",
  },
  {
    encounter: "Dol Guldur Orcs",
    type: "Location",
    name: "Necromancer's Pass",
    unique: false,
    traits: ["Stronghold. Dol Guldur."],
    threat: 3,
    progress: 2,
    text:
      "Travel: The first player must discard 2 cards from his hand at random to travel here.",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Necromancer's-Pass.jpg",
  },
  {
    encounter: "Dol Guldur Orcs",
    type: "Location",
    name: "Enchanted Stream",
    unique: false,
    traits: ["Forest."],
    threat: 2,
    progress: 2,
    text:
      "While Enchanted Stream is the active location, players cannot draw cards.",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Enchanted-Stream.jpg",
  },
  {
    encounter: "Passage Through Mirkwood",
    type: "Enemy",
    name: "Forest Spider",
    unique: false,
    traits: ["Creature. Spider."],
    engagement: 25,
    threat: 2,
    attack: 2,
    defense: 1,
    health: 4,
    text:
      "Forced: After Forest Spider engages a player, it gets +1 attack until the end of the round.",
    shadow:
      "Defending player must choose and discard 1 attachment he controls.",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Forest-Spider.jpg",
  },
  {
    encounter: "Passage Through Mirkwood",
    type: "Enemy",
    name: "East Bight Patrol",
    unique: false,
    traits: ["Goblin. Orc."],
    engagement: 5,
    threat: 3,
    attack: 3,
    defense: 1,
    health: 2,
    shadow:
      "Attacking enemy gets +1 attack. (If this attack is undefended, also raise your threat by 3.)",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/East-Bight-Patrol.jpg",
  },
  {
    encounter: "Passage Through Mirkwood",
    type: "Enemy",
    name: "Black Forest Bats",
    unique: false,
    traits: ["Creature."],
    engagement: 15,
    threat: 1,
    attack: 1,
    defense: 0,
    health: 2,
    text:
      "When Revealed: Each player musht choose 1 character currently commited to a quest, and remove that character from the quest. (The chosen character does not ready.)",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Black-Forest-Bats.jpg",
  },
  {
    encounter: "Passage Through Mirkwood",
    type: "Location",
    name: "Old Forest Road",
    unique: false,
    traits: ["Forest."],
    threat: 1,
    progress: 3,
    text:
      "Response: After you travel to Old Forest Road, the first player may choose and ready 1 character he controls.",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Old-Forest-Road.jpg",
  },
  {
    encounter: "Passage Through Mirkwood",
    type: "Location",
    name: "Forest Gate",
    unique: false,
    traits: ["Forest."],
    threat: 2,
    progress: 4,
    text:
      "Response: After you travel to Forest Gate, the first player may draw 2 cards.",
    image:
      "https://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Forest-Gate.jpg",
  },
];
