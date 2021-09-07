
exports.up = (knex) => {
    return knex.schema.createTable("accounts", (table) => {
        table.increments()
        table.string("email").notNullable().unique()
        table.string("password").notNullable().unique()
        table.string("email").notNullable().unique()
    })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("accounts")
};
