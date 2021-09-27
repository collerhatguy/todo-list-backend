
const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET || "secret"

const tokenBuilder = body => {
    const payload = {
        username: body.username,
        password: body.password,
        subject: body.account_id,
    }
    const options = {
        expiresIn: "1d"
    }
    return jwt.verify(
        payload, 
        JWT_SECRET,
        options
    )
}

module.exports = {
    JWT_SECRET,
    tokenBuilder
}