const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const encounterSchema = new Schema({
  box: { type: String, required: true },
  name: { type: String, required: true },
  encounters: { type: Array, required: false },
});

const Encounter = mongoose.model("Encounter", encounterSchema);

module.exports = Encounter;
