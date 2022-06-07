const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')

router.use('/todos', todos)
router.use('/', home)
router.use('**', (req, res) => {
  res.send({
    returnCode: 200,
    body: {
      message: 'cound not find ' + req.originalUrl
    }
  })
})

module.exports = router