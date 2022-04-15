import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const userData = [{ name: "Jason"}, { name: "Richard"}, { name: "Hargrove"}, { name: "Atari"}, { name: "Bob"}];

function App() {
  const [users, set_users] = useState([])
  
  useEffect(() => {
    set_users(userData)
  }, [])

  const handleChange = (e) => {

  }

  
  return (
    <div className="App">
      <form>
        <h3>Select Someting</h3>
        <div>
          <input type="checkbox" />
          <label>Select All</label>
        </div>
        {users.map((user) => (
                  <div>
                  <input type="checkbox" name={user.name} onChange={handleChange}/>
                  <label>{user.name}</label>
                </div>
          ))}
      </form>
    </div>
  );
}

export default App;
