/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
  .withSchema('public').createTable('gp_head', (table) => {
    table.increments('gp_id').primary()
    table.string('village_name').notNullable()
    table.string('village_address').notNullable().unique()
    table.string('contact_no').notNullable().unique()
    table.string('email_id').notNullable().unique()
    table.string('password').notNullable()
    table.string('role').notNullable()
    table.string('member_name')
    table.timestamps(true, true)
  })
  .withSchema('public').createTable('requests', (table) => {
    table.increments('id').unique().notNullable()
    table.integer('n_people').notNullable()
    table.string('village_address').notNullable().unique()
    table.string('status').notNullable()
    table.string('username').notNullable()
    table.foreign('village_address').references('gp_head.village_address').onDelete('cascade')
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists('gp_head')
  .dropTableIfExists('requests')
}
