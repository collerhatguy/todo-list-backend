
exports.seed = function(knex) {
  return knex('table_name').del()
    .then(() => {
      return knex('table_name').insert([
        {
          account_id: 1, 
          username: "test", 
          password: "test"
        },
      ]);
    });
};
