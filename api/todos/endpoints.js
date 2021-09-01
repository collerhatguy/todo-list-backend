const express = require("express")
const router = express.Router()
const { validateTodo, validateTodoId } = require("./middleware")
const { validateUserId } = require("../users/middleware")


router.get("/:id", validateUserId, (req, res) => {

})

router.put("/:id", validateUserId, validateTodo, (req, res) => {
    
})

router.delete("/:id/:todo_id", validateUserId, validateTodoId, (req, res) => {

})

router.post("/:id", validateTodo, validateUserId, (req, res) => {

})

module.exports = router