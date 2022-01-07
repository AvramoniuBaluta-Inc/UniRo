var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router ;