import db from '../db.js'
import { v4 as uuidv4 } from 'uuid'

const ngoID1 = uuidv4()
const ngoID2 = uuidv4()
const ngoID3 = uuidv4()
const ngoID4 = uuidv4()
const ngoID5 = uuidv4()
const userID1 = uuidv4()
const userID2 = uuidv4()
const userID3 = uuidv4()
const userID4 = uuidv4()
const userID5 = uuidv4()
const officerID1 = uuidv4()

const seed = async () => {
  try {
    // Insert users table
    await db('users').insert({
      user_id: userID1,
      username: 'user1',
      address: 'sangli',
      phone: '1234567890',
      email: 'user1@gmail.com',
      password: '1',
      member_name: null,
    })
    await db('users').insert({
      user_id: userID2,
      username: 'user2',
      address: 'nashik',
      phone: '1234567891',
      email: 'user2@gmail.com',
      password: '2',
      member_name: null,
    })
    await db('users').insert({
      user_id: userID3,
      username: 'user3',
      address: 'pune',
      phone: '1234567892',
      email: 'user3@gmail.com',
      password: '3',
      member_name: null,
    })
    await db('users').insert({
      user_id: userID4,
      username: 'user4',
      address: 'solapur',
      phone: '1234567893',
      email: 'user4@gmail.com',
      password: '4',
      member_name: null,
    })
    await db('users').insert({
      user_id: userID5,
      username: 'user5',
      address: 'aurangabad',
      phone: '1234567894',
      email: 'user5@gmail.com',
      password: '5',
      member_name: null,
    })
    console.log('Added sample users ')

    // Insert into ngo table
    await db('ngos').insert({
      ngo_id: ngoID1,
      username: 'aga khan foundation',
      ngo_type: 'jal jeevan mission',
      address: 'sangli',
      email: 'ngo1@gmail.com',
      password: '1',
      member_name: 'shambhulal',
      phone: '1234567890',
    })
    await db('ngos').insert({
      ngo_id: ngoID2,
      username: 'shambhaji trust',
      ngo_type: 'jal jeevan mission',
      address: 'nashik',
      email: 'ngo2@gmail.com',
      password: '2',
      member_name: 'shambhulal',
      phone: '1234567891',
    })
    await db('ngos').insert({
      ngo_id: ngoID3,
      username: 'paani jeevan foundation',
      ngo_type: 'jal jeevan mission',
      address: 'pune',
      email: 'ngo3@gmail.com',
      password: '3',
      member_name: 'shambhulal',
      phone: '1234567892',
    })
    await db('ngos').insert({
      ngo_id: ngoID4,
      username: 'nanhe paani foundation',
      ngo_type: 'jal jeevan mission',
      address: 'solapur',
      email: 'ngo4@gmail.com',
      password: '4',
      member_name: 'shambhulal',
      phone: '1234567893',
    })
    await db('ngos').insert({
      ngo_id: ngoID5,
      username: 'chote haath foundation',
      ngo_type: 'jal jeevan mission',
      address: 'aurangabad',
      email: 'ngo5@gmail.com',
      password: '5',
      member_name: 'shambhulal',
      phone: '1234567894',
    })
    console.log('Added sample ngo')

    // Insert into issues_table table
    const issue_id = uuidv4()
    await db('issue_status').insert({
      ngo_id: ngoID1,
      issue_id: issue_id,
      status: `pending`,
      ngo_officer: 'sherkhan',
    })
    console.log('Added sample issue !')

    await db('verification_officer').insert({
      officer_id: officerID1,
      username: 'max payne',
      email: 'officer1@gmail.com',
      password: '1',
    })
    console.log('Added sample verification officers !')

    // Insert into requests table
    await db('requests').insert({
      req_id: uuidv4(),
      n_people: 30,
      latitude: 23.23,
      longitude: 52.15,
      location: 'satara',
      ngo_id: ngoID1,
      user_id: userID1,
      officer_id: officerID1,
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
