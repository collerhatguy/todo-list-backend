const express = require("express")
const router = express.Router()
const { validateTodo, validateTodoId } = require("./middleware")
const { getTodosByUserId, updateTodo, deleteTodo, addTodo } = require("./model")

router.get("/:id", (req, res, next) => {
    getTodosByUserId(req.params.id).then(todos => 
        res.status(200).json(todos)    
    ).catch(next)
})

router.put("/:id", validateTodo, (req, res, next) => {
    const { params: { id }, todo } = req
    updateTodo(id, todo).then(updatedTodo => 
        res.status(200).json(updatedTodo)
    ).catch(next)
})

router.delete("/:id", validateTodoId, (req, res, next) => {
    const { params: { id }, todo } = req
    deleteTodo(id).then(() =>
        res.status(200).json(todo)
    ).catch(next)
})

router.post("/", validateTodo, (req, res, next) => {
    addTodo(req.todo).then(todo => 
        res.status(201).json(todo)
    ).catch(next)
})

module.exports = router