import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Menu />
      <About />
    </div>
  );
}

export default App;
