
const validateTodo = (req, res, next) => {
    const { todo, id, completed } = req.body
    if (!todo || typeof todo !== String || todo.length <= 3) next({ status: 404, message: "invalid todo" })
    if (!id || typeof id !== Number) next({ status: 404, message: "invalid todo id" })
    if (!completed || typeof completed !== Boolean) next({ status: 404, message: "invalid todo completed property" })
    req.todo = { ...req.body, user_id: req.params.id}
    next()
} 