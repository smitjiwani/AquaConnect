/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
  .withSchema('public').createTable('ngo', (table) => {
    table.increments('ngo_id').primary()
    table.string('ngo_name').notNullable()
    table.string('ngo_type').notNullable()
    table.string('ngo_address').notNullable().unique()
    table.string('email_id').notNullable().unique()
    table.string('password').notNullable()
    table.string('role').notNullable()
    table.string('member_name')
    table.string('contact_no').notNullable().unique()
    table.timestamps(true, true)
  })
  .withSchema('public').createTable('issue_status', (table) => {
    table.increments('id').primary()
    table.string('status').notNullable()
    table.string('ngo_officer').notNullable()
    table.increments('ngo_id').unique()
    table.foreign('ngo_id').references('ngo.ngo_id').onDelete('cascade')
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists('ngo')
  .dropTableIfExists('issue_status')
}
