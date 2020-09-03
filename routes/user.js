const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, async (req, res) => {
    res.status(200).send(`Email: ${req.locals.email}`)
})

module.exports = router;
