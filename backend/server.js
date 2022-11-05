const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const userRoutes = require('./routes/users')
const exerciseRoutes = require('./routes/exercises')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const endPoint = process.env.ATLAS_END_POINT
mongoose.connect(endPoint)

const connection = mongoose.connection

connection.once('open', () => {
  console.log("DB connected Successfully")
})

app.use('/exercises', exerciseRoutes)
app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`)
})

