
const validateTodo = (req, res, next) => {
    const { todo, id, completed } = req.body
    if (!todo || typeof todo !== "string" || todo.length <= 3) next({ status: 404, message: "invalid todo" })
    if (!id || typeof id !== "number") next({ status: 404, message: "invalid todo id" })
    if (!completed || typeof completed !== "boolean") next({ status: 404, message: "invalid todo completed property" })
    req.todo = { ...req.body, user_id: req.params.id}
    next()
} 

const validateTodoId = (req, res, next) => {
    const { todo_id } = req.params
    // check if its there
    next()
}


module.exports = { validateTodo, validateTodoId }