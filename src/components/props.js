import React from 'react';
import PropTypes from 'prop-types'
const Propiedades = (props)=>{
    return(
        <div>
            <h1>Hola, soy una nueva propiedad{props.name}{props.porDefecto} </h1>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'Verdadero':'Falso'}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{props.objeto.nombre + ' ' + props.objeto.apellido}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.elementReact}</li>
                <li>{props.componentReact}</li>
            </ul>
        </div>
    );
}
//Esta es una asignación de propiedad por defecto.
Propiedades.defaultProps ={
    porDefecto: 'Mi nueva propiedad'
}
Propiedades.prototypes = {
    numero: PropTypes.number.isRequired
}
export default Propiedades