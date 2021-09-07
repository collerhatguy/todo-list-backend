const express = require("express")
const router = express.Router()
const { validateUserId, validateUserPayload } = require("./middleware")


router.get("/:id", validateUserId, (req, res) => {

})

router.put("/:id", validateUserId, validateUserPayload, (req, res) => {

})

router.delete("/:id", validateUserId, (req, res) => {

})

router.post("/", validateUserPayload, (req, res) => {

})

module.exports = router