import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente from './components/componente';
import Propiedades from "./components/props";
import Renderizado from './components/renderizado_condicional';
import RenderizadoElementos from './components/renderizadoElementos';
import {EventoES6, EventoES7, MasSobreEventos} from './components/eventos';
import Padre from './components/comunicacionComponente';
import CicloVida from './components/cicloVida'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        <hr />
        <Propiedades 
          name='Yeison Calle' 
          cadena='texto' 
          numero={1}
          booleano={true} 
          arreglo= {[1,2,3]} 
          objeto= {{nombre: 'Yeison', apellido: 'Calle'}}
          funcion= {(numero)=>numero * numero}
          elementReact= {<i>Soy un elemento de React</i>}
          componentReact={<Componente msg='Hola, me pasaron como componente'/>}    
          />
        </section>
        <section>
        <hr />
      </section>
      <section>
        <hr />
        <Renderizado />
      </section>
      <hr />
      <RenderizadoElementos />
      <hr />
      <EventoES6 />
      <section>
      <hr />
      <EventoES7 />
      <hr />
      <MasSobreEventos />
      <hr />
      <Padre />
      <hr />
      <CicloVida />
      </section>
      </header>
      <section>
        <Componente msg='Hola, soy una prueba de escritorio y me cambiaron un poco' />
      </section>

    </div>
  );
}

export default App;
