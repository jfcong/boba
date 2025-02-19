import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const addInput = () => {
    setInputs([...inputs, inputValue]);
    setInputValue('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" id="inputBox" value={inputValue} onChange={handleChange} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {inputs.map((input, index) => (
            <p key={index}>{input}</p>
          ))}
        </div>
        <button onClick={addInput}>Add Input</button>
         {/* Test: Type in the input box, then click the "Add Input" button.
         The typed text should appear below */}
      </header>
    </div>
  );
}

export default App;
