import React from 'react';
import ExpenseItem from './ExpenseItem';

class ExpenseList extends React.Component {
 render() {
    return (
      <div>
        {this.props.items.map(item => (
          <ExpenseItem
            key={item.id}
            description={item.description}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </div>
    );
 }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default ExpenseList;
