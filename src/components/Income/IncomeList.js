import IncomeItem from './IncomeItem';
import React from 'react';

class IncomeList extends React.Component {
 render() {
    return (
      <div>
        {this.props.items.map(item => (
          <IncomeItem
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
export default IncomeList;