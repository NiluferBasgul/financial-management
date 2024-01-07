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

export default ExpenseList;
