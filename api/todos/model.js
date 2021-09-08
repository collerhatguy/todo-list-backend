const db = require("../../data/db_config")

const todos = db("todos")

const getTodosByUserId = account_id => {
    return todos
        .where({ account_id })
        .sortBy("id")
}

const getTodoById = id => {
    return todos
        .where({ id })
}

const addTodo = todo => {
    return todos
        .insert(todo)
        .then(([id]) => getTodoById(id))
}

const updateTodo = (id, update) => {
    return todos
        .update(update)
        .where({ id })
}

const deleteTodo = id => {
    getTodoById(id).del()
}

module.exports = { getTodosByUserId, addTodo, updateTodo, deleteTodo, getTodoById }