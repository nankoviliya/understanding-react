import './ExpenseItem.css';

function ExpenseItem({data}){
    return (
        <div className='expense-item'>
            <div>{data.ExpenseDate}</div>
            <div className='expense-item__description'>
                <h2>{data.Name}</h2>
                <div className='expense-item__price'>{data.Price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;