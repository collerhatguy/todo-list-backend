const { getAccountById } = require("./model")
const validateUserPayload = (req, res, next) => {
    const { username, password, email } = req.body
    username = username.trim()
    password = password.trim()
    email = email.trim()
    if (!username || typeof username !== "string" || username.length <= 3) next({ status: 404, message: "invalid username" })
    if (!password || typeof password !== "string" || password.length <= 3) next({ status: 404, message: "invalid password" })
    if (!email || typeof email !== "string" || email.length <= 3) next({ status: 404, message: "invalid password" })
    req.userPayload = { username, password, email }
    next()
} 

const validateUserId = (req, res, next) => {
    const { id } = req.params
    getAccountById(id)
        .then(user => {
            if (user) {
                req.user = user
                next()
            } 
            next({ status: 400, message: "user not found" })
        }).catch(next)
}

module.exports = { validateUserPayload, validateUserId }
