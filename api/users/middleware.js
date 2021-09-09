const { getAccountById } = require("./model")
const validateUserPayload = (req, res, next) => {
    const { username, password, email } = req.body
    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()
    const trimmedEmail = email.trim()
    if (!username || typeof username !== "string" || trimmedUsername.length <= 3) next({ status: 404, message: "invalid username" })
    if (!password || typeof password !== "string" || trimmedPassword.length <= 3) next({ status: 404, message: "invalid password" })
    if (!email || typeof email !== "string" || trimmedEmail.length <= 3) next({ status: 404, message: "invalid password" })
    req.userPayload = { 
        username: trimmedUsername, 
        password: trimmedPassword, 
        email: trimmedEmail 
    }
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
