import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { TAREAS_PROYECTO } from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            
                { nombre: 'elegir plataform', estado: true, proyectoId: 1 },
                { nombre: 'elegir plataform1', estado: false, proyectoId: 1 },
                { nombre: 'elegir plataform2', estado: true, proyectoId: 2 },
                { nombre: 'elegir plataform3', estado: false, proyectoId: 2 },
            
        ],
        tareasproyecto: null,
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

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,

                obtenerTareas
            }}
        >

            {props.children}
        </TareaContext.Provider>
    )
}


export default TareaState;