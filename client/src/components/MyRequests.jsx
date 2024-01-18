import React from 'react';
import WaterRequest from './WaterRequest';
import './styles/MyRequests.css';

function MyRequests() {
  const requestsData = [
    { location: 'Delhi', userCount: '5', userName: 'John Doe', status: 'Pending', ngo: 'NGO' },
    { location: 'Delhi', userCount: '5', userName: 'John Doe', status: 'Pending', ngo: 'NGO' },
    { location: 'Delhi', userCount: '5', userName: 'John Doe', status: 'Pending', ngo: 'NGO' },
  ];

  return (
    <div className='my__requests'>
      <h1>My Requests</h1>
      <table className='requests-table'>
        <thead>
          <tr>
            <th>Location</th>
            <th>User Count</th>
            <th>User Name</th>
            <th>Status</th>
            <th>NGO</th>
          </tr>
        </thead>
        <tbody>
          {requestsData.map((request, index) => (
            <WaterRequest
              key={index}
              location={request.location}
              userCount={request.userCount}
              userName={request.userName}
              status={request.status}
              ngo={request.ngo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyRequests;