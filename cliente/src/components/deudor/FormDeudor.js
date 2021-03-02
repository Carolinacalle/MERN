import React from 'react';

const FormDeudor = () => {
    return ( 

        <div className="formulario">
        <form>

        <div className="contenedor-input">
            <input  type="text" name="nombre" className="input-text" placeholder="Nombre Deudor"/>
        </div>
        <br/>
        <div className="contenedor-input">
            <input  type="text" name="producto" className="input-text" placeholder="Producto"/>
        </div>
        <br/>
        <div className="contenedor-input">
        <input  type="number" name="valor" className="input-text" placeholder="Valor"/>
        </div>
        <br/>
        <div className="contenedor-input">
            <input  type="date" name="fecha" className="input-text" placeholder="Fecha "/>
        </div>

        <div className="contenedor-input">
            <input type="submit" value="Agregar Deudor" className="btn btn-primario btn-block"/>
        </div>
        </form>
        </div>
     );
}
 
export default FormDeudor;