var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index')
})


router.post('/', function (req, res) {
  res.send('About birds')
})

module.exports = router ;