class IncomeItem extends React.Component {
    render() {
       return (
         <div>
           <p>{this.props.description}</p>
           <p>{this.props.amount}</p>
           <p>{this.props.date}</p>
         </div>
       );
    }
   }
   
   export default IncomeItem;