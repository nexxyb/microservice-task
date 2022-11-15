import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(0);
  useEffect(() => {
  fetch(' http://0.0.0.0:8000/').then(res => res.json()).then(data => {
      setText(data.text)
      
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <p> {text}</p> <br/>

      </header>
    </div>
  );
}

export default App;
