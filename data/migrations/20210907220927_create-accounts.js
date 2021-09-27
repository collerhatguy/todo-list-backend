
exports.up = (knex) => {
    return knex.schema
      .createTable("accounts", (table) => {
        table.increments("account_id")
        table.string("password").notNullable()
        table
          .string("username")
          .notNullable()
          .unique()
      }).createTable("todos", (table) => {
        table.increments()
        table
          .string("todo")
          .notNullable()
        table
          .boolean("completed")
          .notNullable()
          .defaultTo(false)
        table
          .integer("account_id")
          .unsigned()
          .references("account_id")
          .inTable("accounts")
    })
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists("todos")
    .dropTableIfExists("accounts")
};
