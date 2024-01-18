import db from '../db/db.js'
import { Router } from 'express'

const router = Router()

export const getAllRequests = async (req, res) => {
  try {
    const requests = await db('requests').select('*')
    res.status(200).json(requests)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
    console.error('Login error:', error)
  }
}

export const getRequestById = async (req, res) => {
  const { id } = req.params
  try {
    const requests = await db('requests').where({ req_id: id }).first()
    res.status(200).json(requests)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
    console.error('Login error:', error)
  }
}

export const createRequests = async (req, res) => {
  const { username, n_people, location, latitude, longitude } = req.body


  try {
    const requests = await db('requests')
      .insert({ username: username, n_people: n_people, longitude: longitude, latitude: latitude, location: location })
      .returning('*')
    console.log(requests)
    res.status(201).json({status: 'success'})
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const updateRequest = async (req, res) => {
  const { id } = req.params
  const { username, n_people } = req.body
  try {
    const requests = await db('requests')
      .where({ req_id: id })
      .update({ username: username, n_people })
      .returning('*')
    console.log(requests)
    res.status(201).json(requests)
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const deleteRequest = async (req, res) => {
  const { id } = req.params
  try {
    const requests = await db('requests').where({ req_id: id }).del()
    console.log(requests)
    res.status(201).json(requests)
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const updateRequestStatus = async (req, res) => {
  const { id } = req.params
  const { next } = req.body
  try {
    const statuses = [
      'rejected',
      'pending',
      'verifying',
      'in_process',
      'resolved',
    ]
    let status = await db('requests').select('status').where({ req_id: id })

    let index = statuses.indexOf(status)
    if (index == 4) {
      throw new Error('Status array overflowed')
    }
    // if not already rejected and
    // if you want to update to next step
    if (status != 'rejected' && next == true) {
      status = statuses[index + 1]
    } else {
      // else reject
      status = statuses[0]
    }

    const requests = await db('requests')
      .where({ req_id: id })
      .update({ status: status })
      .returning('*')
    console.log(requests)
    res.status(201).json(requests)
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}
