import React, {Component} from 'react';
import data from '../helpers/data.json'
function ListItem(props){
    return(
        <li>
            <a href={props.el.url} target='_blanck'>{props.el.name}</a>
        </li>
    )
}
export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno']
        }
    }
    render(){
        console.log(data)
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.seasons.map((el) => <li key={el}>{el}</li>)}
                    <h3>Frameworks Fronend JavasCript</h3>
                    <ol>
                        {data.framewoks.map(el=><ListItem key={el.id} el={el}/>)}
                    </ol>
                </ol>
            </div>
        )
    }
}