import React, { Component } from "react";

export default class FormSimple extends Component {

    cajaNombre = React.createRef();
    enviarInformacion = (event) => {
        //DEBEMOS DETENER EL SUBMIT
        event.prevenDefault();
        let nombre = this.cajaNombre.current.value;
        console.log("Datos enviados: " + nombre);
    }

    render() {
        return(
            <div>
                <h1>Form Simple</h1>
                <form onSubmit={this.enviarInformacion}>
                    <label>Nombre:</label>
                    <input type="text" ref={this.cajaNombre}/>
                    <button>Enviar información</button>
                </form>
            </div>
        )
    }
}