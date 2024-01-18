import db from '../db.js'

const dropAndCreateTables = async () => {
  try {
    await db.schema.dropTableIfExists('feedback')
    await db.schema.dropTableIfExists('requests')
    await db.schema.dropTableIfExists('issue_status')
    await db.schema.dropTableIfExists('users')
    await db.schema.dropTableIfExists('ngos')
    await db.schema.dropTableIfExists('verification_officer')
    

    await db.schema.withSchema('public').createTable('users', (table) => {
      table.uuid('user_id').primary().defaultTo(db.fn.uuid())
      table.string('username').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('phone').notNullable().unique() 
      table.string('address').notNullable()
      table.string('member_name')
      table.timestamps(true, true)
    })

    await db.schema.withSchema('public').createTable('ngos', (table) => {
      table.uuid('ngo_id').primary().defaultTo(db.fn.uuid())
      table.string('username').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('phone').notNullable().unique()
      table.string('address').notNullable().unique()
      table.string('ngo_type')
      table.string('member_name')
      table.timestamps(true, true)
    })

    await db.schema
      .withSchema('public')
      .createTable('issue_status', (table) => {
        table.uuid('issue_id').primary().defaultTo(db.fn.uuid())
        table.uuid('ngo_id').unique().notNullable()
        table.string('status').notNullable().defaultTo('pending')
        table.string('ngo_officer')
        table.foreign('ngo_id').references('ngos.ngo_id').onDelete('cascade')
        table.timestamps(true, true)
      })

    await db.schema.withSchema('public').createTable('verification_officer', (table) => {
        table.uuid('officer_id').primary().defaultTo(db.fn.uuid())
        table.string('username').notNullable()
        table.string('email').notNullable().unique()
        table.string('password').notNullable()
        table.timestamps(true, true)
      })  

    await db.schema.withSchema('public').createTable('requests', (table) => {
      table.uuid('req_id').primary().defaultTo(db.fn.uuid())
      table.integer('n_people').notNullable()
      table.float('latitude').notNullable()
      table.float('longitude').notNullable()
      table.string('location').notNullable()
      table.uuid('user_id')
      table.uuid('ngo_id')
      table.uuid('officer_id')
      table.string('status').notNullable().defaultTo('pending')
      table.string('username').notNullable()
      table.foreign('user_id').references('users.user_id')
      table.foreign('ngo_id').references('ngos.ngo_id')
      table.foreign('officer_id').references('verification_officer.officer_id')
      table
      table.timestamps(true, true)
    })

    await db.schema.withSchema('public').createTable('feedback', (table) => {
      table.uuid('feedback_id').primary().defaultTo(db.fn.uuid())
      table.string('rubric_1')
      table.string('rubric_2')
      table.string('rubric_3')
      table.string('rubric_4')
      table.uuid('user_id')
      table.uuid('ngo_id')
      table.uuid('req_id')
      table.foreign('user_id').references('users.user_id')
      table.foreign('ngo_id').references('ngos.ngo_id')
      table.foreign('req_id').references('requests.req_id')
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
