import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Login = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario ]  = useState({
        email: '',
        password: '',
    });

    const { email, password } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }


    const onSubmit  = (e) => {
        e.preventDefault();

        //validar q no haya campos vacios

        // pasarlo al action

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={onChange}
                            />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={onChange}
                            />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar session"
                            />
                    </div>

                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta" >
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;