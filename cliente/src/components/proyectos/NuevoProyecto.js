import React, {Fragment, useState, useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // obtener el state del form
    const proyectosContext = useContext( proyectoContext );
    const { formulario, mostrarFormulario, agregarProyecto, mostrarError, errorformulario } = proyectosContext;

    const [proyecto, guardarProyecto] = useState({
        nombre: '',

    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyecto =  e => {
        e.preventDefault();

        // validar proyecto
        if( nombre === ''){
            mostrarError();
            return;
        }

        // add state
        agregarProyecto(proyecto)

        // reinicia el form
        guardarProyecto({
            nombre: ''
        })
        
    }

    //mostrar form
    const onClick = () => {
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ onClick }

            >Nuevo proyecto</button>
            
            { formulario ? 
                    (
                        <form
                                className="formulario-nuevo-proyecto"
                                onSubmit={onSubmitProyecto}
                            >

                                <input
                                    type="text"
                                    className="input-text"
                                    placeholder="Nombre Proyecto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeProyecto}
                                />

                                <input type="submit"
                                    className="btn btn-primario btn-block"
                                    value="Agregar proyecto"
                                />
                            </form>
                    )
                : null }
            { errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null }    
        </Fragment>

     );
}
 
export default NuevoProyecto;