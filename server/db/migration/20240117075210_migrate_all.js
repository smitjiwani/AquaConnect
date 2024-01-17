import db from '../db.js'

const dropAndCreateTables = async () => {
  try {
    await db.schema.dropTableIfExists('issue_status')
    await db.schema.dropTableIfExists('user')
    await db.schema.dropTableIfExists('ngos')

    await db.schema.withSchema('public').createTable('user', (table) => {
      table.uuid('gp_id').primary()
      table.string('village_name').notNullable()
      table.string('village_address').notNullable()
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

    await db.schema.withSchema('public').createTable('issue_status', (table) => {
      table.uuid('issue_id').primary()
      table.uuid('ngo_id').unique().notNullable()
      table.string('status').notNullable()
      table.string('ngo_officer').notNullable()
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
