import React,{Fragment,  Component } from 'react';
import Deudor from './Deudor';
import DataTable, { createTheme } from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


createTheme('solarized', {
    text: {
      primary: 'black',
      secondary: 'black',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

  const clientesDeudores = [
    {nombre: 'Manuel Rodriguez', producto: 'adidas', valor: '12000', fecha: 'enero 15',  estado: false},
    {nombre: 'Arturo Calle ', producto: 'adidas', valor: '12000', fecha: '26/02/2021', estado: true}, 
    {nombre: 'Alexis Escobar', producto: 'adidas', valor: '12000', fecha: 'enero 15', estado: false},
    {nombre: 'Jamith Castillo', producto: 'adidas', valor: '12000', fecha: 'enero 15', estado: true},
    {nombre: 'Jamith Castillo', producto: 'adidas', valor: '12000', fecha: 'enero 15', estado: true},
    {nombre: 'Jamith Castillo', producto: 'adidas', valor: '12000', fecha: 'enero 15', estado: true},
    {nombre: 'Jamith Castillo', producto: 'adidas', valor: '12000', fecha: 'enero 15', estado: true},
    {nombre: 'Jamith Castillo', producto: 'adidas', valor: '12000', fecha: 'enero 15', estado: true},
    {nombre: 'Jamith Castillo', producto: 'adidas', valor: '12000', fecha: 'enero 15', estado: true},
    {nombre: 'Jamith Castillo', producto: 'adidas', valor: '12000', fecha: 'enero 15', estado: true},
    {nombre: 'Jamith Castillo', producto: 'adidas', valor: '12000', fecha: 'enero 12', estado: true}
];


const paginacionOpciones={

    rowsPerPageText: 'Filas por páginas',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',

    
}

  
 class ListadosDeudores extends Component  {
    
    state={
        busqueda: '',
        deudores: [],
    columna:[]
      }
   
      
        onChange=async e=>{
          e.persist();
          await this.setState({busqueda: e.target.value});
          this.filtrarElementos();

          //console.log(this.state.busqueda);
        }
    
        asignarColumnas=()=>{
            const columna = [
                {
                    name:'Clientes',
                    selector:'nombre',
                    sortable:true
                    
                },
                {
                    name:'Producto',
                    selector:'producto',
                    sortable:true
                    
                },
                {
                    name:'Valor',
                    selector:'valor',
                    sortable:true
                    
                },
                {
                    name:'Fecha',
                    selector:'fecha',
                    sortable:true
                    
                }
            ];
            
            this.setState({columna: columna});
            }

            filtrarElementos=()=>{
                var search=clientesDeudores.filter(item=>{
                  if(item.nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
                  item.nombre.includes(this.state.busqueda) || 
                  item.producto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
                  item.producto.includes(this.state.busqueda)  || item.fecha.includes(this.state.busqueda)
                 

                  ){
                    return item;
                  }
                });
                this.setState({deudores: search});
              }


              crearIndex=()=>{
                var contador=1;
                clientesDeudores.map(elemento=>{
                  elemento["id"]=contador;
                  contador++;
                })
              }
            
              componentDidMount(){
                this.crearIndex();
                this.asignarColumnas();
            this.setState({deudores: clientesDeudores});
              }

        render(){
    return ( 

        <Fragment>
<h2>Fecha: Enero 2021 </h2>
<div className="table-responsive">
<div className="barraBusqueda">
            <input
              type="text"
              placeholder="Buscar"
              className="textField"
              name="busqueda"
            value={this.state.busqueda}
               onChange={this.onChange}
            />
            <button type="button" className="btnBuscar" 
            >{" "}
             
              <FontAwesomeIcon icon={faSearch}/>
            </button>
            </div>

<DataTable
     columns={this.state.columna}
     data={this.state.deudores}
     theme="solarized"
     pagination
     paginationComponentOptions={paginacionOpciones}
     striped={true}
      pointerOnHover={true}
      highlightOnHover={true}
      noDataComponent={<span>No se encontró ningún elemento</span>}
     
     
  />
  </div>

            {/* <h2>Fecha: Enero 2021 </h2>
        <ul className="listado-tareas">
            {clientesDeudores.length === 0 
            ? (<li className="tarea"><p>No hay Deudores</p></li>) 
            : clientesDeudores.map(deudor =>(
                <Deudor deudor={deudor} />
            ))  
            }
        </ul> */}
        </Fragment>

     );
}
 }

export default ListadosDeudores;