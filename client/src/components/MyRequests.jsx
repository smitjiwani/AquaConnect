import React from 'react'
import WaterRequest from './WaterRequest'
import './styles/MyRequests.css'

//needs to be mapped using key and onclick open page with status

function MyRequests() {
  return (
    <div className='my__requests'>
        <h1>MyRequests</h1>
        <WaterRequest
        location="Delhi"
        userCount="5"
        userName="John Doe"
        status="Pending"
        ngo="NGO"
        />
        <WaterRequest
        location="Delhi"
        userCount="5"
        userName="John Doe"
        status="Pending"
        ngo="NGO"
        />
        <WaterRequest
        location="Delhi"
        userCount="5"
        userName="John Doe"
        status="Pending"
        ngo="NGO"
        />
    </div>
  )
}

export default MyRequests