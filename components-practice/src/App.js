import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import './App.css';
import Heading from './components/Heading';
// can also write it as import * from './components/math';
// when getting info in use {pi.default} {pi.doublePi} {pi.triplePi}
import pi, { doublePi, triplePi } from './components/math';
// Calc can be named anything
import * as Calc from './components/calculator';

function App() {
  return (
    <div className="App">
      <Heading />
      <p>math.js</p>
      <ul>
        <li> pi = {pi} </li>
        <li> pi x 2 = {doublePi()} </li>
        <li> pi x3 = {triplePi()} </li>
      </ul>
      <p>calculator.js</p>
      <ul>
        <li> {Calc.add(1, 2)} </li>
        <li> {Calc.subtract(7, 2)} </li>
        <li> {Calc.multiply(2, 3)} </li>
        <li> {Calc.divide(5, 2)} </li>
      </ul>

    </div>
  );
}

export default App;
