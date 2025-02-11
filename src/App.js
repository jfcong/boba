import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <label htmlFor="input-box">Input Box:</label>
          <input
            type="text"
            id="input-box"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={addItem}>Add Item</button>
        </div>
        <ul className='row-list'>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </header>
    </div>
  );

  function addItem() {
    setItems([...items, inputValue]);
    setInputValue('');
  }
}

export default App;
