// Exporting an object containing all of our models

const Resistance = require("./resistance");

module.exports = {
  Cardio: require("./cardio"),
  Workout: require("./workout"),
  Resistance: require("./resistance")
};