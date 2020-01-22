import React, {Fragment, useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    // extraer proyectos de state inicial
    const proyectosContext = useContext( proyectoContext );
    const { proyecto } = proyectosContext;

    // si no hay proyecto seleccionado
    if(!proyecto) return null;

    // array destructuring
    const [proyectoActual] = proyecto;

    return ( 

        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea.."
                        name="nombre"
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;