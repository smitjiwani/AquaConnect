import React from 'react';
import './styles/WaterRequest.css';

const DashCard = (props) => {
  const paras = []; 
  for (let i = 0; i < props.data.length; i++) {
    paras.push(
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" key={i}>
        {props.data[i]}
      </p>,
    );
  }
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}:
      </h5>
      <div>{paras}</div>
    </div>
  );
};

export default DashCard;