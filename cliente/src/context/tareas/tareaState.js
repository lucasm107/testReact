import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { 
        TAREAS_PROYECTO,
        AGREGAR_TAREA,
        AGREGAR_PROYECTO,
        VALIDAR_TAREA,
        ELIMINAR_TAREA,
        ESTADO_TAREA,
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA,
     } from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            
                { id: 1, nombre: 'elegir plataform', estado: true, proyectoId: 1 },
                { id: 2, nombre: 'elegir plataform1', estado: false, proyectoId: 1 },
                { id: 3, nombre: 'elegir plataform2', estado: true, proyectoId: 2 },
                { id: 4, nombre: 'elegir plataform3', estado: false, proyectoId: 2 },
            
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null,
    }

    // crear dispach y state
    const [state, dispatch] = useReducer(TareaReducer, initialState );

    // Crear las func


    //obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // agregar una tarea al proyecto seleccionada
    const agregarTareas = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    } 

    // valida y muestra error si es necesario
    const validarTareas = () => {
        dispatch({
            type: VALIDAR_TAREA,
        })
    } 

    // elimina tarea x id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    } 

    const cambiaEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    

    // extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // EDITA UNA TAREA
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,

                obtenerTareas,
                agregarTareas,
                validarTareas,
                eliminarTarea,
                cambiaEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
            }}
        >

            {props.children}
        </TareaContext.Provider>
    )
}


export default TareaState;