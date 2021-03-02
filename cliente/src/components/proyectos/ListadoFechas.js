import React from 'react'
import Fecha from './Fecha'


const ListadoFechas = () => {


    const fechas = [
        {nombre: 'Enero 2021'},
        {nombre: 'Febrero 2021'},
        {nombre: 'Marzo 2021'}
    ]

    return (


        <ul className="listado-proyectos">
                {fechas.map(fecha =>(
                    <Fecha fecha={fecha} />
                ))}
        

        </ul>

      );
}
 
export default ListadoFechas;