import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputs, setInputs] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddInput = () => {
    setInputs([...inputs, inputValue]);
    setInputValue('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddInput}>Add</button>
        <div className='input-display-area'>
            {inputs.map((input, index) => (
                <li key={index}>{input}</li>
            ))}
        </div>
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