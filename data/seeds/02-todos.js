
exports.seed = function(knex) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        {
          id: 1, 
          todo: 'make seeds', 
          completed: 1, 
          account_id: 1
        },
        {
          id: 2, 
          todo: 'make login', 
          completed: 0, 
          account_id: 1
        },
        {
          id: 3, 
          todo: 'make signup', 
          completed: 0, 
          account_id: 1
        },
      ]);
    });
};
