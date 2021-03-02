import React from 'react';

const Deudor = ({deudor}) => {

    
    return ( 

        <li className="tarea sombra">
            <p>{deudor.nombre}</p>
            <div className="estado">
                {deudor.estado
                ? (
                    <button type="button" className="completo">Pagó</button>
                )
                :
                (
                    <button type="button" className="incompleto">No Pagó</button>
                )}
            </div>
        </li>
     );
}
 
export default Deudor;