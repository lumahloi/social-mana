/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table){
      table.increments()
      table.string('description').notNullable()
      table.json('dislikes')

      table.string('userid')

      table.foreign('userid').references('id').inTable('users')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};
