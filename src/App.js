import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const itemToPut = {
    ExpenseDate : Date.now(),
    Name : "Car Insurance",
    Price : "$232.42"  
  }

  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem data={itemToPut}/>
      </header>
    </div>
  );
}

export default App;
