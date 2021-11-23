const mongoose = require("mongoose");
const flightSchema = mongoose.Schema({
  flightType: String,
  price: { type: Number, min: 100, max: 10000 },
  capacity: { type: String, minLength: 5 },
});

module.exports = mongoose.model("Flights", flightSchema);
