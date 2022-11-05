const User = require('../models/user.model')
const route = require('express').Router()

route.get('/', (req, res) => {
  User.find()
  .then((users) => {
    res.json(users)
  }).catch((err) => {
    res.json(err)
  })
})

route.post('/create', (req, res) => {
  const username = req.body.username
  const newUser = new User({username})

  newUser.save()
  .then(() => res.json("User Added Succesfully"))
  .catch((err) => res.json('Error ' + err))
})

module.exports  = route

