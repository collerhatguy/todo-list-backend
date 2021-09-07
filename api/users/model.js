const db = require("../../data/db_config")

const accounts = db("accounts")

exports.getAccountById = id => {
    return accounts
        .where({ id })
        .first()
}

exports.createAccount = account => {
    return accounts
        .insert(account)
        .then(([id]) => this.getAccountById(id))
}

exports.login = account => {
    return accounts
        .where(account)
        .first()
}