const route = require('express').Router()

const Exercise = require('../models/exercise.model')

route.get('/', (req, res) => {
  Exercise.find()
  .then((exercises) => {
    res.json(exercises)
  })
  .catch((err) => {
    res.status(400).json('Error ' + err)
  })
})

route.post('/add', (req, res) => {
  const newExercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date:  Date.parse(req.body.date)
  })

  newExercise.save()
  .then(() => {
    res.json("Exercise Added Successfully...")
  })
  .catch((err) => {
    res.status(400).json("Error " + err)
  })
})

route.get('/:id', (req, res) => {
  Exercise.findById(req.params.id)
  .then((exercise) => res.json(exercise))
  .catch(err => res.status(400).json(err))
})

route.delete('/:id', (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
  .then(() => res.json("Exercise Deleted Successfully.."))
  .catch(err => res.status(400).json(err))

})

route.post('/update/:id', (req, res) => {
  Exercise.findById(req.params.id)
  .then((exercise) => {
    exercise.username = req.body.username
    exercise.description = req.body.description
    exercise.duration = Number(req.body.duration)
    exercise.date = Date.parse(req.body.date)
    
    exercise.save()
    .then(() => res.json("Exercise has been updated successfully"))
    .catch((err) => res.status(400).json(err))

  })
  .catch((err) => res.status(400).json(err))
})

module.exports = route