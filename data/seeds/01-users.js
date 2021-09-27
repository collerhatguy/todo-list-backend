
exports.seed = function(knex) {
  return knex('accounts').del()
    .then(() => {
      return knex('accounts').insert([
        {
          account_id: 1, 
          username: "test", 
          password: "test"
        },
      ]);
    });
};
