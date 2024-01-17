import React, { useEffect, useState } from 'react'
import WaterRequest from '../components/WaterRequest'



function Dashboard() {

  const [waterRequests, setWaterRequests] = useState([])

  const getWaterRequests = async () => {
    try {
      const response = await fetch("/api/ngos");
      const jsonData = await response.json();
      setWaterRequests(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getWaterRequests();
  }, [])

  return (
    <div className=''>
      <h1>Dashboard</h1>

      <div className=''>
        {waterRequests.map(waterRequests => {

          return (
            <WaterRequest
              key={waterRequests.id}
              location={waterRequests.location}
              userCount='5'
              userName='John Doe'
              status='Pending'
            />
          )
        })}
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

    </div>
  )
}

export default Dashboard