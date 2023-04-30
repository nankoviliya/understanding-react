import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({ data }) {
    return(
        <Card className="expenses">
            {data.map((item) => (
                <ExpenseItem data={item} />
            ))}
        </Card>
    )
}

export default Expenses;