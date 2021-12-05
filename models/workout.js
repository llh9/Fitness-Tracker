const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;