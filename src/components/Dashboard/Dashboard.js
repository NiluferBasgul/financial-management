import React from 'react';
import BudgetList from '../components/Budget/BudgetList';

const Dashboard = (props) => {
 return (
    <div>
      <h1>Dashboard</h1>
      <BudgetList budgets={props.budgets} />
    </div>
 );
};
// eslint-disable-next-line import/no-anonymous-default-export
export default Dashboard;