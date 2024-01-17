import db from '../db.js'
import { v4 as uuidv4 } from 'uuid'

const ngoID = uuidv4()
const userID = uuidv4()

const seed = async () => {
  try {
    // Insert gp_head table
    await db('users').insert({
      user_id: userID,
      village_name: 'dhanushkodi',
      village_address: 'bihar',
      contact_no: '1234567890',
      email_id: 'gphead@gmail.com',
      password: 'password1',
      role: 'GP',
      member_name: 'biharilal',
    })
    console.log('Added sample gp head')

    // Insert into ngo table
    await db('ngos').insert({
      ngo_id: ngoID,
      ngo_name: 'aga khan foundation',
      ngo_type: 'jal jeevan mission',
      ngo_address: 'bihar',
      email_id: 'ngo@gmail.com',
      password: 'password1',
      role: 'NGO',
      member_name: 'shambhulal',
      contact_no: '1234567890',
    })
    console.log('Added sample ngo')

    // Insert into issues_table table
    const issue_id = uuidv4()
    await db('issue_status').insert({
      ngo_id: ngoID,
      issue_id: uuidv4(),
      status: `Pending`,
      ngo_officer: 'sherkhan',
    })
    console.log('Added sample issue !')

    // Insert into requests table
    await db('requests').insert({
      req_id: uuidv4(),
      n_people: 30,
      ngo_id: ngoID,
      user_id: userID,
      status: `Pending`,
      username: 'username',
    })
    console.log('Added sample request !')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

seed()
