//remember to hook up this file into server.js
//and to export it

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router