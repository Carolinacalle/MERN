import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [usuario, guardarUsuario] = useState({
 email:'',
 password:''

    });

const {email, password} = usuario;

    const onChange = e => {

        guardarUsuario({
            ...usuario,
        [e.target.name] : e.target.value
        })

    }

    const onsubmit = e => {

        e.preventDefault();

    }
    return ( 

        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={onsubmit}>
                <div className="campo-form">
                    <label htmlFor="email">Correo</label>
                    <input type="email" id="email" name="email" value={email} placeholder="Tu email" onChange={onChange}/>
                </div>

                <div className="campo-form">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" value={password}  placeholder="Tu contraseña" onChange={onChange}/>
                </div>

                <div className="campo-form">
                <input  value="Iniciar Sesión"  type="submit" className="btn btn-primario btn-block"  />
                </div>
               
            </form>
            <Link to={'/registro-usuario'} className="enlace-cuenta">
                    Registrate
                </Link>
            </div>
        </div>

     );
}
 
export default Login;