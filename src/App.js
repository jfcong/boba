import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddToList = () => {
    if (inputValue.trim() !== ''){
        setList([...list, inputValue]);
        setInputValue('');
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleAddToList)
  }, [list, inputValue]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleAddToList}
        />
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

