import db from '../db.js'

;(async () => {
    try {
      await db.schema.dropTableIfExists('ngo')
      await db.schema.withSchema('public').createTable('ngo', (table) => {
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
      console.log('NGO table created!')
      process.exit(0)
    } catch (err) {
      console.log(err)
      process.exit(1)
    }
})();