const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const userServices = require('../services/user')

router.get('/', authMiddleware, async (req, res) => {
    res.status(200).send(`Email: ${req.locals.email}`)
})

router.post('/', authMiddleware, async (req, res) => {
    try {
        const newUser = {
            email: req.locals.email,
            ...req.body,
        }
        const user = await  userServices.createUser(newUser)
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get('/:email', authMiddleware, async (req, res) => {
    try {
        const { email } = req.params
        const user = await  userServices.getUserEmail(email)
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})


module.exports = router;
