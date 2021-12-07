const router = require('express').Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    //Query to model
    db.Workout.find({})
    .populate('exercises')
    .then(workoutData => {
        res.json(workoutData);
        res.send(workoutData)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post("/api/workouts", (req, res) => {
    //Query to model
    db.Workout.create({ 
        exercises: res.json(req.body)
    })
  .then(result => {
    console.log(result);
  })
  .catch(({message}) => {
    console.log(message);
  });
})

router.put("/api/workouts/udefined", (req, res) => {
    //Query to model
    db.Workout.create({ 
        exercises: [res.json(req.body)] 
    })
  .then(result => {
    console.log(result);
  })
  .catch(({message}) => {
    console.log(message);
  });
})

module.exports = router;