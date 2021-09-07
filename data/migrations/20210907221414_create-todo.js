
exports.up = (knex) => {
    return knex.schema.createTable("todos", (table) => {
        table.increments()
        table.string("todo").notNullable().required()
        table.boolean("completed").notNullable().required()
        table.integer("user_id").notNullable().required()
    })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("todos")
};
