import db from '../db.js'
import { v4 as uuidv4 } from 'uuid'

const ngoID = uuidv4()
const userID = uuidv4()

const seed = async () => {
  try {
    // Insert users table
    await db('users').insert({
      user_id: userID,
      village_name: 'dhanushkodi',
      village_address: 'sangli',
      contact_no: '1234567890',
      email_id: 'user1@gmail.com',
      password: '1',
      role: 'user',
      member_name: 'biharilal',
    })
    await db('users').insert({
      user_id: userID,
      village_name: 'bimbal',
      village_address: 'nashik',
      contact_no: '1234567890',
      email_id: 'user2@gmail.com',
      password: '2',
      role: 'user',
      member_name: 'shambhu',
    })
    await db('users').insert({
      user_id: userID,
      village_name: 'ayugya',
      village_address: 'pune',
      contact_no: '1234567890',
      email_id: 'user3@gmail.com',
      password: '3',
      role: 'user',
      member_name: 'chintamani',
    })
    await db('users').insert({
      user_id: userID,
      village_name: 'pinchkoli',
      village_address: 'solapur',
      contact_no: '1234567890',
      email_id: 'user4@gmail.com',
      password: '4',
      role: 'user',
      member_name: 'chetan',
    })
    await db('users').insert({
      user_id: userID,
      village_name: 'sitarampur',
      village_address: 'aurangabad',
      contact_no: '1234567890',
      email_id: 'user5@gmail.com',
      password: '5',
      role: 'user',
      member_name: 'banke',
    })
    console.log('Added sample users ')

    // Insert into ngo table
    await db('ngos').insert({
      ngo_id: ngoID,
      ngo_name: 'aga khan foundation',
      ngo_type: 'jal jeevan mission',
      ngo_address: 'sangli',
      email_id: 'ngo1@gmail.com',
      password: '1',
      role: 'NGO',
      member_name: 'shambhulal',
      contact_no: '1234567890',
    })
    await db('ngos').insert({
      ngo_id: ngoID,
      ngo_name: 'shambhaji trust',
      ngo_type: 'jal jeevan mission',
      ngo_address: 'sangli',
      email_id: 'ngo2@gmail.com',
      password: '2',
      role: 'NGO',
      member_name: 'shambhulal',
      contact_no: '1234567890',
    })
    await db('ngos').insert({
      ngo_id: ngoID,
      ngo_name: 'paani jeevan foundation',
      ngo_type: 'jal jeevan mission',
      ngo_address: 'sangli',
      email_id: 'ngo3@gmail.com',
      password: '3',
      role: 'NGO',
      member_name: 'shambhulal',
      contact_no: '1234567890',
    })
    await db('ngos').insert({
      ngo_id: ngoID,
      ngo_name: 'nanhe paani foundation',
      ngo_type: 'jal jeevan mission',
      ngo_address: 'nashik',
      email_id: 'ngo4@gmail.com',
      password: '4',
      role: 'NGO',
      member_name: 'shambhulal',
      contact_no: '1234567890',
    })
    await db('ngos').insert({
      ngo_id: ngoID,
      ngo_name: 'chote haath foundation',
      ngo_type: 'jal jeevan mission',
      ngo_address: 'nashik',
      email_id: 'ngo5@gmail.com',
      password: '5',
      role: 'NGO',
      member_name: 'shambhulal',
      contact_no: '1234567890',
    })
    console.log('Added sample ngo')

    // Insert into issues_table table
    const issue_id = uuidv4()
    await db('issue_status').insert({
      ngo_id: ngoID,
      issue_id: issue_id,
      status: `pending`,
      ngo_officer: 'sherkhan',
    })
    console.log('Added sample issue !')

    // Insert into requests table
    await db('requests').insert({
      req_id: uuidv4(),
      n_people: 30,
      ngo_id: ngoID,
      user_id: userID,
      status: `pending`,
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
