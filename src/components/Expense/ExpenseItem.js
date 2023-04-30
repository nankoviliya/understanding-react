import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem({ data }) {
    return (
        <Card className='expense-item'>
            <ExpenseDate data={data.ExpenseDate} />
            <div className='expense-item__description'>
                <h2>{data.Name}</h2>
                <div className='expense-item__price'>{data.Price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;