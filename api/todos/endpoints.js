const express = require("express")
const router = express.Router()
const { validateTodo, validateTodoId } = require("./middleware")
const { validateUserId } = require("../users/middleware")

// 1. get todos
// 2. update todos
// 3. delete todos
// 4. add todos


// 1. get todos
router.get("/:id", validateUserId, (req, res) => {

})

// 2. update todos
router.put("/:id", validateUserId, validateTodo, (req, res) => {
    
})

// 3. delete todos
router.delete("/:id/:todo_id", validateUserId, validateTodoId, (req, res) => {

})

// 4. add todos
router.post("/:id", validateTodo, validateUserId, (req, res) => {

})

router.use((err, req, res, next) => {
    res.status(err.status).json({
        message: err.message
    })
})

module.exports = router