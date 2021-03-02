import React, {useState} from 'react';
import { Link } from 'react-router-dom';




const RegistroUsuario = () => {
    

    const [usuario, guardarUsuario] = useState({
     email:'',
     nombreusuario:'',
     password:'',
     confirmar:''
    
        });


    const {email,nombreusuario, password,confirmar} = usuario;

    const onChange = e => {

        guardarUsuario({
            ...usuario,
        [e.target.name] : e.target.value
        })

    }

    return (  

        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
            <h1>Registro de usuario</h1>
            <form >
                <div className="campo-form">
                    <label htmlFor="nombreusuario">Nombre usuario</label>
                    <input type="text" id="nombreusuario" name="nombreusuario" value={nombreusuario}  placeholder="Tu Nombre" onChange={onChange}/>
                </div>

                <div className="campo-form">
                    <label htmlFor="email">Correo</label>
                    <input type="email" id="email" name="email" value={email} placeholder="Tu email" onChange={onChange}/>
                </div>
               
                <div className="campo-form">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" value={password}  placeholder="Tu contraseña" onChange={onChange}/>
                </div>
                
                <div className="campo-form">
                    <label htmlFor="confirmar">Confirmar Contraseña</label>
                    <input type="password" id="confirmar" name="confirmar" value={confirmar}  placeholder="Confirma tu contraseña" onChange={onChange}/>
                </div>

                <div className="campo-form">
                <input value="Registrar"   type="submit" className="btn btn-primario btn-block"  />
                </div>
               
            </form>
            <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>

    );
}
 
export default RegistroUsuario;

