import React from 'react';
import RevenueItem from './RevenueItem';

const RevenueList = (props) => {
 return (
    <div className="revenue-list">
      {props.items.map(item => 
        <RevenueItem 
          key={item.id} 
          description={item.description} 
          amount={item.amount} 
          date={item.date} 
        />
      )}
    </div>
 );
}

export default RevenueList;