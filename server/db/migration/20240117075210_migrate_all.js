import db from '../db.js'

const dropAndCreateTables = async () => {
  try {
    await db.schema.dropTableIfExists('requests')
    await db.schema.dropTableIfExists('issue_status')
    await db.schema.dropTableIfExists('users')
    await db.schema.dropTableIfExists('ngos')
    

    await db.schema.withSchema('public').createTable('users', (table) => {
      table.uuid('user_id').primary()
      table.string('village_name').notNullable()
      table.string('village_address').unique()
      table.string('contact_no').notNullable().unique()
      table.string('email_id').notNullable().unique()
      table.string('password').notNullable()
      table.string('role').notNullable()
      table.string('member_name')
      table.timestamps(true, true)
    })

    await db.schema.withSchema('public').createTable('ngos', (table) => {
      table.uuid('ngo_id').primary()
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

    await db.schema
      .withSchema('public')
      .createTable('issue_status', (table) => {
        table.uuid('issue_id').primary()
        table.uuid('ngo_id').unique().notNullable()
        table.string('status').notNullable()
        table.string('ngo_officer').notNullable()
        table.foreign('ngo_id').references('ngos.ngo_id').onDelete('cascade')
        table.timestamps(true, true)
      })

    await db.schema.withSchema('public').createTable('requests', (table) => {
      table.uuid('req_id').primary()
      table.integer('n_people').notNullable()
      table.string('user_id')
      table.string('ngo_id')
      table.string('status').notNullable()
      table.string('username').notNullable()
      table.foreign('user_id').references('users.user_id')
      table.foreign('ngo_id').references('ngos.ngo_id')
      table.timestamps(true, true)
    })
    console.log('Tables dropped and created successfully!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

dropAndCreateTables()
