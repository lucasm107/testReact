import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario ]  = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: '',
    });

    const { nombre, email, password, confirmar } = usuario;

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
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="nombre"
                            value={nombre}
                            onChange={onChange}
                            />
                    </div>

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
                        <label htmlFor="confirmar">Confirmar</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="password"
                            value={confirmar}
                            onChange={onChange}
                            />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                            />
                    </div>

                </form>

                <Link to={'/'} className="enlace-cuenta" >
                    Iniciar session
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;