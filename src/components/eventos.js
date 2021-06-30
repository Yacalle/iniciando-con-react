import React, {Component} from 'react';
export class EventoES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this)
        this.restar= this.restar.bind(this)
    }
    sumar(e){
        this.setState({
            contador: this.state.contador + 1
        })
    };
    restar(e){
        this.setState({
            contador: this.state.contador - 1
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos React en componentes de clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
    
}
export class EventoES7 extends Component{
    state = {
        contador: 0
    }

    sumar=(e)=>{
        this.setState({
            contador: this.state.contador + 1
        })
    };
    restar=(e)=>{
        this.setState({
            contador: this.state.contador - 1
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos React en componentes de clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
    
}
/*
function Boton (props){
    return(
        <div>
            <button onClick={props.myOnClick}>Botón de evento Personalizado</button>
        </div>
    )
}*/
const Boton = ({myOnClick})=> <div><button onClick={myOnClick}>Botón de evento Personalizado</button></div>
export class MasSobreEventos extends Component{
    HandlerClick=(e, saludar)=>{
        console.log(e)
        console.log(this)
        console.log(e.target)
        console.log(saludar)
    }
    render(){
        return(
            <div>
                <h2>Eventos Nativos, Sintéticos y Personalizados</h2>
                <button onClick={(e)=> this.HandlerClick(e, 'Hola, estoy saludadndo')}>Saludar</button>
                <Boton myOnClick={(e)=> this.HandlerClick(e, 'Hola, estoy saludadndo')}/>
            </div>
        )
    }
}