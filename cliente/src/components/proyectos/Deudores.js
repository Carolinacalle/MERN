import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormDeudor from '../deudor/FormDeudor';
import ListadosDeudores from '../deudor/ListadosDeudores';
const Deudores = () => {
    return ( 
 <div className="contenedor-app">
     <Sidebar/>
<div className="seccion-principal">
    
    <Barra/>

    <main>

    <FormDeudor/>

        <div className="contenedor-tareas">
        
            <ListadosDeudores/>
        </div>

    </main>
</div>

 </div>

     );
}
 
export default Deudores;