import './App.css';
import freeCodeCampLogo from './img/freecode.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BtnClear from './componentes/BtnClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'
import Logo from './componentes/Logo';



function App() {

  const[input, setInput] = useState('')
 
  const agregarNum = val => {
    setInput(input + val)
  };

  const calcResult = () =>{
    setInput(evaluate(input));
  } 

  return (
    <div className='App' >

      <Logo ></Logo>
      <div className='contenedor-calculadora'>
        <Pantalla input ={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarNum}>1</Boton> 
          <Boton manejarClic={agregarNum}>2</Boton>
          <Boton manejarClic={agregarNum}>3</Boton>
          <Boton manejarClic={agregarNum}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarNum}>4</Boton>
          <Boton manejarClic={agregarNum}>5</Boton>
          <Boton manejarClic={agregarNum}>6</Boton>
          <Boton manejarClic={agregarNum}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarNum}>7</Boton>
          <Boton manejarClic={agregarNum}>8</Boton>
          <Boton manejarClic={agregarNum}>9</Boton>
          <Boton manejarClic={agregarNum}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcResult}>=</Boton>
          <Boton manejarClic={agregarNum}>0</Boton>
          <Boton manejarClic={agregarNum}>.</Boton>
          <Boton manejarClic={agregarNum}>/</Boton>
        </div>
        <div className='fila'>
          <BtnClear clearScreen ={()=> setInput('')}>Clear</BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;
