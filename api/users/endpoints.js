const express = require("express")
const router = express.Router()
const { validateUser, validateUserId } = require("./middleware")


router.get("/:id", validateUserId, (req, res) => {

})

router.put("/:id", validateUserId, validateUser, (req, res) => {

})

router.delete("/:id", validateUserId, (req, res) => {

})

router.post("/", validateUser, (req, res) => {

})

module.exports = router