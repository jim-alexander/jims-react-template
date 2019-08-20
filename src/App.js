import React from 'react';
import ExampleState from './context/example/ExampleState';

import './App.css';

function App() {
  return (
    <ExampleState>
      <div className='App'>
        <h1>Jims-react-template</h1>
      </div>
    </ExampleState>
  );
}

export default App;
