
exports.up = (knex) => {
    return knex.schema.createTable("accounts", (table) => {
        table.increments("account_id")
        table.string("email").notNullable().unique()
        table.string("password").notNullable()
        table.string("username").notNullable().unique()
    })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("accounts")
};
