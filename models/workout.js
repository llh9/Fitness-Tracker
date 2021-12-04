const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: {
    type: Object
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;