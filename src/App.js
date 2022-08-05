import './App.css';
import freeCodeCampLogo from './img/freecode.png';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
      <img 
          src={freeCodeCampLogo} className='freecodecamp-logo' alt='Logo ' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
