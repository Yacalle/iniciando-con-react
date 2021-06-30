import React, {Component} from 'react';
export default class Padre extends Component{
    state = {
        contador: 0
    }
    incrementarContador = (e)=>{
        this.setState({
            contador: this.state.contador + 1
        })
    }
    render(){
        return(
            <>
               <h2>Comunicación entre Componentes</h2>
               <Hijo contar={this.incrementarContador} message='Componente hijo'/>
            </>
        )
    }
}
function Hijo (props){
    return(
        <>
        <h3>{props.message}</h3>
        <button onClick={props.contar}>+</button>
        </>
    ) 
}