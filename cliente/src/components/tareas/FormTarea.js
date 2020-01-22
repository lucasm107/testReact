import React, {Fragment, useContext, useState, useEffect } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // extraer proyectos de state inicial
    const proyectosContext = useContext( proyectoContext );
    const { proyecto } = proyectosContext;

    // obtener el state del tareas
    const tareasContext = useContext( tareaContext );
    const { tareaseleccionada, errortarea, agregarTareas, validarTareas, obtenerTareas, actualizarTarea } = tareasContext;


    // effect q detecata sihay una tarea seleccionada
    useEffect(() => {
        if( tareaseleccionada !== null ){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);


    // state del form
    const [tarea, guardarTarea] = useState({
        nombre: '',
    })

    // extraer nombre del 
    const { nombre } = tarea;

    // si no hay proyecto seleccionado
    if(!proyecto) return null;

    // array destructuring
    const [proyectoActual] = proyecto;

    // leer form
    const handleChange = e => {
        guardarTarea({
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if( nombre.trim() === ''){
            validarTareas();
            return;
        }

        // si es edicion o nueva
        if( tareaseleccionada === null ){
            // agregar tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTareas(tarea);
        }else{
            // actualiza tarea existente
            actualizarTarea(tarea);
        }
        
        // obtener y filtrar tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // reset form 
        guardarTarea({
            nombre: '',
        })
    }

    return ( 

        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >

                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea.."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value={ tareaseleccionada !== null ? 'Editar tarea' : 'Agregar tarea' }
                    />
                </div>
            </form>

            { errortarea ? <p className="error mensaje">El nombre de la tarea obligatorio</p>: null}
        </div>
     );
}
 
export default FormTarea;