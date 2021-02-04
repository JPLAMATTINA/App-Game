import React from 'react';
import logo from './img/logo.gif';
import './App.css';

function App() {
return (
    <div className="App">
      <header className="App-header">
      <div id='title'>
      <h3><strong>Piedra, Papel, Tijera, Lagarto y Spock</strong></h3>
      <h3><strong>Big Bang Theory style</strong></h3>
    </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
  </div>  
  );
}

export default App;
