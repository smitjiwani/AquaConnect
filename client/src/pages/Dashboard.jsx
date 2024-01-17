import React from 'react'
import WaterRequest from '../components/WaterRequest'



function Dashboard() {
  
  return (
    <div className='Dashboard'>
      <h1>Dashboard</h1>

      <WaterRequest
      location='1234 Main St'
      userCount='5'
      userName='John Doe'
      status='Pending'
      />
      <WaterRequest
      location='1234 Main St'
      userCount='5'
      userName='John Doe'
      status='Pending'
      />
      <WaterRequest
      location='1234 Main St'
      userCount='5'
      userName='John Doe'
      status='Pending'
      />
      
    </div>
  )
}

export default Dashboard