const db = require("../../data/db_config")

exports.getAccountById = id => {
    return db("accounts")
        .where({ id })
        .first()
}

exports.createAccount = account => {
    return db("accounts")
        .insert(account)
        .then(([id]) => this.getAccountById(id))
}

exports.checkUsernameExists = username => {
    return db("accounts")
        .leftJoin("todos as t", "t.account_id", "ac.account_id")
        .select("t.*", "ac.username as name")
        .where({ username })
        .first()
}

exports.login = async account => {
    const user = await db("accounts as ac")
        .leftJoin("todos as t", "t.account_id", "ac.account_id")
        .select("t.*", "ac.username as name")
        .where(account)
    return user 
}