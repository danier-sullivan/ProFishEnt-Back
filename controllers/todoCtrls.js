const db = require('../models') //this is where the db model will go
// console.log(db)

const getTodo = (req, res) => {
    console.log("INSIDE THE GET TODO CTRL")
    //db.People.find({}) <--- db has all of our models
    // res.send("this is get people")
    db.ToDo.find({})
    .then((foundTodos) => {
        console.log(foundTodos)
        if(!foundTodos){
            console.log("inside if not todos")
            res.status(404).json({message: "Cannot find Todos"})
        } else {
            console.log('inside else of todos')
            res.status(200).json({data: foundTodos})
        }
    })
}

const createTodo = (req, res) => {
    // res.send("this is create people")
    db.ToDo.create(req.body)
    .then((createdTodo) => {
        if(!createdTodo){
            res.status(404).json({message: "Cannot create Todo"})
        } else {
            res.status(201).json({data: createdTodo})
        }
    })
}

const updateTodo = (req, res) => {
    db.ToDo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updateTodo) => {
        if(!updateTodo){
            res.status(400).json({Message: 'Could not update todo'})
        } else {
            res.status(200).json({Data: updateTodo, Message: 'updated todo'})
        }
    })
}

const deleteTodo = (req, res) => {
    db.ToDo.findByIdAndDelete(req.params.id)
    .then((deletedTodo) => {
        if(!deletedTodo){
            res.status(400).json({Message: 'Could not delete todo'})
        } else {
            res.status(200).json({Data: deletedTodo, Message: 'deleted todo'})
        }
    })
}

module.exports = {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}
