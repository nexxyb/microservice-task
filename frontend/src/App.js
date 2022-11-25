import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(0);
  useEffect(() => {
  fetch('/').then(res => res.json()).then(data => {
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









































//   fetch(' http://ec2-3-82-107-68.compute-1.amazonaws.com:8000/').then(res => res.json()).then(data => {
//       setText(data.text)
