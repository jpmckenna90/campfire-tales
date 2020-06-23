const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const encounterSchema = new Schema({
  box: { type: String, required: true },
  name: { type: String, required: true },
});

const Encounter = mongoose.model("Encounter", encounterSchema);

module.exports = Encounter;
