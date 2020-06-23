const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  pack: { type: String, required: true },
  encounter: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  unique: { type: Boolean, required: true },
  traits: { type: String, required: false },
  engagement: { type: Number, required: true },
  threat: { type: Number, required: true },
  attack: { type: Number, required: true },
  defense: { type: Number, required: true },
  health: { type: Number, required: true },
  text: { type: String, required: false },
  shadow: { type: String, required: false },
  flavor: { type: String, required: false },
});

const EncounterCard = mongoose.model("Card", cardSchema);

module.exports = EncounterCard;
