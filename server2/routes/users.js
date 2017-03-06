const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.json({ from: 'server 2', delay: 0 })
})

module.exports = router
