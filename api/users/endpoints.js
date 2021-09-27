const router = require("express").Router()
const { validateUserPayload, validateUsernameExists } = require("./middleware")
const { createAccount } = require("./model")
const bcrypt = require("bcrypt")

router.post("/login", validateUserPayload, validateUsernameExists, (req, res, next) => {
    const { user, body } = req
    const { password: sent } = body 
    const { password } = user 

    if (bcrypt.compareSync(sent, password)) {
        res.status(200).json(user)
    } else {
        next({ status: 404, message: "wrong password" })
    }
})


router.post("/register", validateUserPayload, (req, res, next) => {
    const { username, password } = req.userPayload
    createAccount({ username, password: bcrypt.hashSync(password, 8) })
        .then(newUser => res.status(201).json(newUser))
        .catch(next)
})

module.exports = router