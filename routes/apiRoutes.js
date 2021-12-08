const router = require('express').Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    //Query to model
    db.Workout.find({})
   // .populate('exercises')
    .then(workoutData => {
      res.json(workoutData);
      console.log(workoutData)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get("/api/workouts/range", (req, res) => {
  //Query to model
  db.Workout.find({})
 // .populate('exercises')
  .then(workoutData => {
    res.json(workoutData);
    console.log(workoutData)
  })
  .catch(err => {
      res.json(err)
  })
})

router.post("/api/workouts", (req, res) => {
    //Query to model
    db.Workout.create({})
  .then(result => {
    console.log(result);
    res.json(result);

  })
  .catch(err => {
    res.json(err)
})
})

router.put("/api/workouts/:id", (req, res) => {
    //Query to model
    console.log(req.params.id);
    console.log(req.body)
    db.Workout.findByIdAndUpdate(
      req.params.id, { 
       $push:{exercises: req.body} 
    })
  .then(result => {
    console.log(result);
    res.json(result);
    console.log("wow")
  })
  .catch(err => {
    res.json(err)
})
})

module.exports = router;