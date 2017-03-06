const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  const delay = 2000 + Math.random() * 1000

  setTimeout(() => {
    randomlyFail(res, delay, Math.random() < 0.5)
  }, delay)
})

module.exports = router

function randomlyFail(res, delay, isFail) {
  if (isFail) {
    return res.status(500).end()
  }
  res.json({from: 'server 1', delay})
}
