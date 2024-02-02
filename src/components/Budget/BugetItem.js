import React from 'react';

const BudgetItem = ({ budget }) => {
  return (
    <div>
      <p>{budget.category}</p>
      <p>{budget.budget}</p>
    </div>
  );
};
// eslint-disable-next-line import/no-anonymous-default-export
export default BudgetItem;
