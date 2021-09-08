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

exports.deleteAccount = id => {
    return this.getAccountById(id).del()
}

exports.login = async account => {
    const user = await db("accounts as ac")
        .leftJoin("todos as t", "t.account_id", "ac.account_id")
        .select("t.*", "ac.username as name")
        .where(account)
        .first()
    return user 
}