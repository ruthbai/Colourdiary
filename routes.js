const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    console.log('yass')
    res.render("index")
})
router.get('/user', function (req, res) {
    console.log('yass')
    res.render("user")
})

module.exports = router