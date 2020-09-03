const express = require('express')
const app = express()
const UserController = require('./routes/user')

const ROUTES = {
    users: '/api/users'
}

const PORT = 3000

app.use(express.json())
app.use(ROUTES.users, UserController)

app.listen(PORT,() => (
    console.log(`server up and running, PORT: ${PORT}`)
))
