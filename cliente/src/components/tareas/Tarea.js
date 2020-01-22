import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ( {tarea} ) => {

    // obtener el state del tareas
    const tareasContext = useContext( tareaContext );
    const { eliminarTarea , obtenerTareas, cambiaEstadoTarea, guardarTareaActual } = tareasContext;

    // obtener el state del proyecto
    const proyectosContext = useContext( proyectoContext );
    const { proyecto } = proyectosContext;

    // array destructuring
    const [proyectoActual] = proyecto;

    // func q se ejecuta cuando click btn eliminar
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    const cambiarEstado = tarea => {
        if( tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        cambiaEstadoTarea(tarea);
    }


    const seleccionarTarea = tarea => {
        guardarTareaActual( tarea );
    }


    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                { tarea.estado 
                    ?
                        ( 
                            <button
                                type="button"
                                className="completo"
                                onClick={ ()=> cambiarEstado(tarea) }
                            >Completo</button>
                        ) 
                    :
                        ( 
                            <button
                                type="button"
                                className="incompleto"
                                onClick={ ()=> cambiarEstado(tarea) }
                            >Incompleto</button>
                        ) 
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={ () => seleccionarTarea( tarea ) }
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id) }
                >Eliminar
                </button>
            </div>

        </li>
     );
}
 
export default Tarea;
