import db from '../db.js'
;(async () => {
  try {
    await db.schema.dropTableIfExists('issue_status')
    await db.schema
      .withSchema('public')
      .createTable('issue_status', (table) => {
        table.uuid('ngo_id').unique().notNullable()
        table
          .string('status')
          .notNullable()
          .table.string('ngo_officer')
          .notNullable()
        table.foreign('ngo_id').references('ngo.ngo_id')
        table.timestamps(true, true)
      })
    console.log('Issue status table created!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
