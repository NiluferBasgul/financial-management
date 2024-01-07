import IncomeItem from './IncomeItem';

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

export default IncomeList;