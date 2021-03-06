const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  distance: {
    type: Number,
    required: "Enter an amount"
  },
  duration: {
    type: Number,
    required: "Enter an amount"
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;