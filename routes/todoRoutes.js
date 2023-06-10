const router = require('express').Router()
const { todoCtrl } = require('../controllers') //all of our methods instide of controllers/index.js

//ROUTES - METHODS //
router.get('/', todoCtrl.getTodo)
router.post('/',todoCtrl.createTodo)
router.put("/:id", todoCtrl.updateTodo)
router.delete('/:id', todoCtrl.deleteTodo)

module.exports = router 