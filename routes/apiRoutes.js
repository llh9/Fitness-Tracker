const router = require('express').Router();
const Cardio = require("../models/cardio.js");

router.get("/api/workouts", (req, res) => {
//Query to model
Cardio.find({})
.then(workoutData => {
    res.json(workoutData)
})
.catch(err => {
    res.json(err)
})
});


module.exports = router;