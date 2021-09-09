const router = require("express").Router()
const { validateUserId, validateUserPayload } = require("./middleware")
const { deleteAccount, createAccount, login } = require("./model")

router.get("/:id", validateUserId, (req, res) => {
    res.status(200).json(req.user)
})

// router.put("/:id", validateUserId, validateUserPayload, (req, res) => {

// })

router.delete("/:id", validateUserId, (req, res, next) => {
    const { params: { id }, user } = req
    deleteAccount(id)
        .then(() => res.status(200).json(user))
        .catch(next)
})

router.post("/", validateUserPayload, (req, res, next) => {
    const { userPayload } = req
    createAccount(userPayload)
    .then(newUser => res.status(201).json(newUser))
    .catch(next)
})

router.get("/", validateUserPayload, (req, res, next) => {
    const { userPayload } = req
    const credentials = login(userPayload)
    res.status(200).json(credentials)
})

module.exports = router