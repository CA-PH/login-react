const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController')
const router = express.Router()

//GET ALL workouts
router.get('/', getWorkouts)

//GET one workout
router.get('/:id', getWorkout)

//POST a NEW workout
router.post('/', createWorkout)

//DELETE a NEW workout
router.delete('/:id', deleteWorkout)

//UPDATE a NEW workout
router.patch('/:id', updateWorkout)

module.exports = router;