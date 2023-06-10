const router = require('express').Router()
const todoRoute = require('./todoRoutes') //IMPORTING people route methods

//URL DIRECTORY 
router.use('/todo', todoRoute)

module.exports = router