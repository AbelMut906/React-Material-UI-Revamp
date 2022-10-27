import './App.css';
import React from 'react'
function App() {
  const name = 'Abel';
  const age = 20
  return (
    <div className="App">
      <div className="content">
        App component
        <p>Your first name is {name}</p>
        <p>and age is {age}</p>
        <p>[3, 5]</p>
      </div>
    </div>
  );
}

export default App;
