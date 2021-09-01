const express = require("express")
const todoEndpoints = require("./todos/endpoints")
const userEndpoints = require("./users/endpoints")

const app = express()
app.use(express.json())

app.use("/api/todos", todoEndpoints)
app.use("/api/user", userEndpoints)

app.use((err, req, res, next) => {
    res.status(err.status).json({
        message: err.message
    })
})

module.exports = app