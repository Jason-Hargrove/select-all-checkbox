import logo from './logo.svg';
import './App.css';

const userData = [{ name: "Jason"}, { name: "Richard"}, { name: "Hargrove"}, { name: "Atari"}];

function App() {
  return (
    <div className="App">
      <form>
        <h3>Select Someting</h3>
        <div>
          <input type="checkbox" />
          <label>Select All</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>User Name</label>
        </div>
      </form>
    </div>
  );
}

export default App;
