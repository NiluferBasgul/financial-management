import React from 'react';
import '../../css/RevenueItem.css';

const RevenueItem = (props) => {
 return (
    <div className="revenue-item">
      <p>{props.description}</p>
      <p>{props.amount}</p>
      <p>{props.date}</p>
    </div>
 );
}

export default RevenueItem;