const express = require('express')
const mongoose = require('mongoose')
const { url } = require('./config/db')
const app = express()
const UserController = require('./routes/user')

const ROUTES = {
    users: '/api/users'
}

const PORT = 3000

app.use(express.json())

//Connect DB
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Mongo connect')
    })
    .catch((err) => {
        console.log(err)
    })

app.use(ROUTES.users, UserController)

app.listen(PORT,() => (
    console.log(`server up and running, PORT: ${PORT}`)
))
