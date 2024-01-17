import db from '../db.js'
import { v4 as uuidv4 } from 'uuid'

const seed = async () => {
  try {
    // Insert gp_head table
    const gpId = uuidv4()
    await db('gp_head').insert({
      gp_id: gpId,
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
    const ngoid = uuidv4();
    await db('ngo').insert({
      ngo_id: ngoid,
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
    await db('issue_status').insert({
      ngo_id: ngoid,
      status: `Pending`,
      ngo_officer: 'sherkhan',
    })

    console.log('Added sample issue !')

    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

seed()
