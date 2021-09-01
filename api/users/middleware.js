
const validateUser = (req, res, next) => {
    const { username, password, email } = req.body
    if (!username || typeof username !== String || username.length <= 3) next({ status: 404, message: "invalid username" })
    if (!password || typeof password !== String || password.length <= 3) next({ status: 404, message: "invalid password" })
    if (!email || typeof email !== String || email.length <= 3) next({ status: 404, message: "invalid password" })
    req.user = req.body
    next()
} 

const validateUserId = (req, res, next) => {
    const { id } = req.params
    // code for getting user from database
    next()
}

module.exports = { validateUser, validateUserId }
