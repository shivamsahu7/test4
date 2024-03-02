const router = require('express').Router()
const orderController = require('./orderController')

router.get('/list',orderController.list)

module.exports = router 