import React from 'react';
import './styles/WaterRequest.css';

const WaterRequest = (props) => {
  return (
    <tr className='table-row'>
      <td className='table-cell'>{props.location}</td>
      <td className='table-cell'>{props.userCount}</td>
      <td className='table-cell'>{props.userName}</td>
      <td className='table-cell'>{props.status}</td>
      <td className='table-cell'>{props.ngo}</td>
    </tr>
  );
}

export default WaterRequest;