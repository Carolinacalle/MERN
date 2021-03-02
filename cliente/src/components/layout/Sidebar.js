import React from 'react';
import NuevaFecha from '../proyectos/NuevaFecha';
import ListadoFechas from '../proyectos/ListadoFechas';

const Sidebar = () => {
    return (  
        <aside>
            <h1>Control de Deudores</h1>
            <NuevaFecha/>
            <div className="proyectos">
                <h2>Tus Fechas</h2>

                <ListadoFechas/>

            </div>
        </aside>
    );
}
 
export default Sidebar;