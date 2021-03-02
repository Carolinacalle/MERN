import React from 'react'

const Fecha = ({fecha}) => {
    return ( 

        <li>
            <button type="button" className="btn btn-blank" >{fecha.nombre}</button>
        </li>

     );
}
 
export default Fecha;