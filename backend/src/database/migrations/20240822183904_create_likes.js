/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('likes', function(table){
        table.increments()
        table.string('userid').notNullable()
        table.integer('postid').notNullable()
  
        table.foreign('userid').references('id').inTable('users')
        table.foreign('postid').references('id').inTable('posts')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('likes')
};
