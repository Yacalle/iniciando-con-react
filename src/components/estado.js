import React, {Component} from 'react';
function EstadoHijo (props){
    return(
        <div>
            <p>{props.EstateChild}</p>
        </div>
    )
}
export default class Estado extends Component{
    /*
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };
        
        setInterval(() => {
           this.setState({
               contador: this.state.contador + 1
           }) 
        }, 2000);
        
    }*/
    render(){
        return(
            <div>
                <h2>Hello, I'm the state</h2>
                <p>{this.state.contador}</p>
                <EstadoHijo EstateChild={this.state.contador}/>
            </div>
        )
    }
}