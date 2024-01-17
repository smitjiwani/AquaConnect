
import db from '../db.js'

;(async () => {
    try {
      await db.schema.dropTableIfExists('gp_head')
      await db.schema.withSchema('public').createTable('gp_head', (table) => {
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
      console.log('GP table created!')
      process.exit(0)
    } catch (err) {
      console.log(err)
      process.exit(1)
    }
})();

