import db from '../db/db.js'
import { Router } from 'express'

const router = Router()

export const getAllNgo = async (req, res) => {
  try {
    const ngos = await db('ngos').select('*')
    res.status(200).json(ngos)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
    console.error('Login error:', error)
  }
}

export const getNgoById = async (req, res) => {
  const { id } = req.params
  try {
    const ngo = await db('ngos').where({ id: id }).first()
    res.status(200).json(ngo)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
    console.error('Login error:', error)
  }
}

export const createNgo = async (req, res) => {
  const { name, email, password, phone } = req.body
  try {
    const ngo = await db('ngos')
      .insert({ name: name, email: email, password: password, phone: phone })
      .returning('*')
    console.log(ngo)
    res.status(201).json(ngo)
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const updateNgo = async (req, res) => {
  const { id } = req.params
  const { name, email, password, phone } = req.body
  try {
    const ngo = await db('ngos')
      .where({ id: id })
      .update({ name: name, email: email, password: password, phone: phone })
      .returning('*')
    console.log(ngo)
    res.status(201).json(ngo)
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const deleteNgo = async (req, res) => {
  const { id } = req.params
  try {
    const ngo = await db('ngos').where({ id: id }).del()
    console.log(ngo)
    res.status(201).json(ngo)
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const getNearestRequest = async (req, res) => {
  try {
    const { LocationNgo } = req.body
    const [Lat, Long] = LocationNgo
    console.log(typeof Lat)
    const requests = await db
      .select()
      .from('requests')
      .where({ status: 'pending' })
    // console.log(farms)

    const nearestPoints = []
    let numberofPoints = 10
    for (let i = 0; i < numberofPoints; i++) {
      nearestPoints.push({
        id: null,
        Dist: null,
      })
    }

    for (let request of requests) {
      let Latf = LocationNgo[0],
        Longf = LocationNgo[0]

      const Distf = Math.sqrt(
        (Lat - Latf) * (Lat - Latf) + (Long - Longf) * (Long - Longf),
      )
      for (let point of nearestPoints) {
        if (point.id == null || point.Dist > Distf) {
          point.id = farm['id']
          point.Dist = Distf
          break
        }
      }
    }

    let data = []

    for (let point of nearestPoints) {
      for (let request of requests) {
        if (request['id'] == point.id) data.push(farm)
      }
    }

    // console.log(nearestPoints)
    res.status(200).json(data)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
