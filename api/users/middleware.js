const { getAccountById, checkUsernameExists } = require("./model")

const validateUserPayload = (req, res, next) => {
    const { username, password, email } = req.body
    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()
    if (!username || typeof username !== "string" || trimmedUsername.length <= 3) next({ status: 404, message: "invalid username" })
    if (!password || typeof password !== "string" || trimmedPassword.length <= 3) next({ status: 404, message: "invalid password" })
    req.userPayload = { 
        username: trimmedUsername, 
        password: trimmedPassword
    }
    next()
} 

const validateUsernameExists = (req, res, next) => {
    const { username } = req.body
    checkUsernameExists(username).then(user => {
        if (user) {
            req.user = user
            next()
        } else {
            next({ status: 404, message: "no such account" })
        }
    })

}

const validateUserId = (req, res, next) => {
    const { id } = req.params
    getAccountById(id)
        .then(user => {
            if (user) {
                req.user = user
                next()
            } else {
                next({ status: 400, message: "user not found" })
            }
        }).catch(next)
}

module.exports = { validateUserPayload, validateUserId, validateUsernameExists }
