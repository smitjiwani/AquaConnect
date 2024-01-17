
import db from '../db.js'

const migrate = async () => {
  try {

      await db.schema.withSchema('public').dropTableIfExists('issue_status')
      await db.schema.withSchema('public').dropTableIfExists('requests')
      await db.schema.withSchema('public').dropTableIfExists('gp_head')
      await db.schema.withSchema('public').dropTableIfExists('ngo')
     
      
      console.log('Dropped tables!')

      await db.schema.withSchema('public').createTable('gp_head', (table) => {
        table.uuid('gp_id').primary()
        table.string('village_name').notNullable()
        table.string('village_address').notNullable().unique()
        table.string('contact_no').notNullable().unique()
        table.string('email_id').notNullable().unique()
        table.string('password').notNullable()
        table.string('role').notNullable()
        table.string('member_name')
        table.timestamps(true, true)
      })
      console.log('GP table created!')

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

      await db.schema.withSchema('public').createTable('issue_status', (table) => {
        table.uuid('ngo_id').unique().notNullable()
        table.string('status').notNullable()
        table.string('ngo_officer').notNullable()
        table.foreign('ngo_id').references('ngo.ngo_id')
        table.timestamps(true, true)
      })
    console.log('Issue status table created!')

      await db.schema.withSchema('public').createTable('requests', (table) => {
        table.uuid('id').primary()
        table.integer('n_people').notNullable()
        table.string('village_address').notNullable().unique()
        table.string('status').notNullable()
        table.string('username').notNullable()
        table.foreign('village_address').references('gp_head.village_address')
        table.timestamps(true, true)
      })
    console.log('requests table created!')

      process.exit(0)
    } catch (err) {
      console.log(err)
      process.exit(1)
    }
}

migrate()