import knex from 'knex'
import knexfile from './knexfile.cjs'

const db = knex(knexfile.development)
module.exports = db
