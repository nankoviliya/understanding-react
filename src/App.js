import './App.css';
import Expenses from './components/Expense/Expenses';

function App() {
  const expenses = [{
    ExpenseDate: Date.now(),
    Name: "Car Insurance",
    Price: "$232.42"
  },
  {
    ExpenseDate: Date.now(),
    Name: "Life Insurance",
    Price: "$532.11"
  },
  {
    ExpenseDate: Date.now(),
    Name: "Bike Insurance",
    Price: "$155.92"
  }];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
