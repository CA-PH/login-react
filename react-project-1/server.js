require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const staffRoutes = require('./routes/staff')
const userRoutes = require('./routes/user')


//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/staffs', staffRoutes)
app.use('/api/users', userRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
// app.get('/', (req, res) => {
//     res.send("Welcome to Cloud Ace")})


// app.get('/books', (req, res) => {
//     res.send([
//         {id: 1, title: 'book 1', authors: ["Michael Mendoza", "Kylo Canilang"]},
//         {id: 2, title: 'book 2', authors: ["Jayson Ferrer", "Joseph Sambo"]},
//       ])})

