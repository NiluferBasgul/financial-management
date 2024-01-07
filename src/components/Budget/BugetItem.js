import React from 'react';

const BudgetItem = (props) => {
 return (
    <div>
      <p>{props.budget.category}</p>
      <p>{props.budget.budget}</p>
    </div>
 );
};
export default BudgetItem;
