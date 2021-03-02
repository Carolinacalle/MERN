import React, {Fragment, useState} from 'react';

const NuevaDeuda = () => {

    const [deudor, guardarDeudor] = useState({
        fecha:''
    });

    const onChangeProyecto = e => {
        guardarDeudor({
        ...deudor,
        [e.target.name] : e.target.value

        });
    }

    const {fecha} = deudor;


    const onSubmitDeuda = e =>{

        e.preventDefault();

    }
    return ( 
        <Fragment>
        <button type="button" className="btn btn-block btn-primario">Nueva Fecha</button>
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitDeuda}>

<input type="date" className="input-text" placeholder="Fecha deuda" onChange={onChangeProyecto} value={fecha} name="fecha"/>

<input type="submit" className="btn btn-primario btn-block" value="Agregar Fecha"/>

        </form>

        </Fragment>
     );
}
 
export default NuevaDeuda;