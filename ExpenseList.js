import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList(props) {
  return (
    <div className='expenses'>
      <ExpenseItem
        title={props.atts.title}
        amount={props.atts.amount}
        date={props.atts.date}
      />
    </div>
  );
}

export default ExpenseList;
