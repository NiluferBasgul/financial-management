import React from 'react';
import BudgetItem from '../Budget/BugetItem';

const BudgetList = (props) => {
 return (
    <div>
      {props.budgets.map((budget) => (
        <BudgetItem key={budget.id} budget={budget} />
      ))}
    </div>
 );
};

export default BudgetList;
