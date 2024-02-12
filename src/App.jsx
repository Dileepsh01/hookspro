import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [value, setvalue] = useState(0);
  const [error, seterror] = useState('');

  const Increase = () => {
    if (value < 5) {
      setvalue(value + 1);
    } else {
      seterror('value can not be more than 5');
    }
  };

  const Decrease = () => {
    if (value > 0) {
      setvalue(value - 1);
    } else {
      seterror('value can not be less than 0');
    }
  };

  return (
    <>
      <h1>Use State Hooks</h1>
      <h1>Counter: {value} </h1>
      <h2>Value: {value} </h2>
      <p
        style={{
          color: 'red',
          fontWeight: 'bolder',
          textTransform: 'uppercase',
        }}>
        {error}
      </p>
      <button onClick={Increase}>Increase Value</button>
      <button onClick={Decrease}>Decrease Value</button>
    </>
  );
};

export default App;
