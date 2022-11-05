const route = require('express').Router()

const Task = require('../models/task.model')

route.get('/', (req, res) => {
  Task.find()
  .then((tasks) => {
    res.json(tasks)
  })
  .catch((err) => {
    res.status(400).json('Error ' + err)
  })
})

route.post('/add', (req, res) => {
  const newTask = new Task({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date:  Date.parse(req.body.date)
  })

  newTask.save()
  .then(() => {
    res.json("Task Added Successfully...")
  })
  .catch((err) => {
    res.status(400).json("Error " + err)
  })
})

route.get('/:id', (req, res) => {
  Task.findById(req.params.id)
  .then((task) => res.json(task))
  .catch(err => res.status(400).json(err))
})

route.delete('/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id)
  .then(() => res.json("Task Deleted Successfully.."))
  .catch(err => res.status(400).json(err))

})

route.post('/update/:id', (req, res) => {
  Task.findById(req.params.id)
  .then((task) => {
    task.username = req.body.username
    task.description = req.body.description
    task.duration = Number(req.body.duration)
    task.date = Date.parse(req.body.date)
    
    task.save()
    .then(() => res.json("Task has been updated successfully"))
    .catch((err) => res.status(400).json(err))

  })
  .catch((err) => res.status(400).json(err))
})

module.exports = route