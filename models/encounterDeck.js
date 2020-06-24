const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  encounter: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  unique: { type: Boolean, required: true },
  traits: { type: String, required: false },
  engagement: { type: Number, required: false },
  threat: { type: Number, required: false },
  attack: { type: Number, required: false },
  defense: { type: Number, required: false },
  health: { type: Number, required: false },
  text: { type: String, required: false },
  shadow: { type: String, required: false },
  flavor: { type: String, required: false },
  victory: { type: Number, required: false },
});

const EncounterCard = mongoose.model("Card", cardSchema);

module.exports = EncounterCard;
