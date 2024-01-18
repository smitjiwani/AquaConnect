import React from 'react';
import './styles/DashCard.css';

const DashCard = (props) => {
  const paras = []; 
  for (let i = 0; i < props.data.length; i++) {
    paras.push(
      <p key={i}>
        {props.data[i]}
      </p>,
    );
  }
  return (
    <div className="Dashcard">
      <div>
        {props.title}:
      </div>
      <div>{paras}</div>
    </div>
  );
};

export default DashCard;