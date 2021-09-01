const express = require("express")
const router = express.Router()
const { validateUser, validateUserId } = require("./middleware")

// 1. get user
// 2. update user
// 3. delete user
// 4. add user


// 1. get user
router.get("/:id", validateUserId, (req, res) => {
})

// 2. update user
router.put("/:id", validateUserId, validateUser, (req, res) => {

})

// 3. delete user
router.delete("/:id", validateUserId, (req, res) => {

})

// 4. add user
router.post("/", validateUser, (req, res) => {

})

router.use((err, req, res, next) => {
    res.status(err.status).json({
        message: err.message
    })
})

module.exports = router