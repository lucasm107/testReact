import React, {useReducer} from 'react';

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { 
            FORMULARIO_PROYECTO,
            OBTENER_PROYECTOS,
            AGREGAR_PROYECTO,
            VALIDAR_FORMULARIO,
            PROYECTO_ACTUAL,
            ELIMINAR_PROYECTO
        } from '../../types'
import uuid from 'uuid';



const ProyectoState = props => {

    const proyectos = [
        { id:1, nombre: 'Tienda virtual'},
        { id:2, nombre: 'Tienda fisica'},
        { id: 3, nombre: 'Tauasl'},
        { id: 4, nombre: 'XXXxx'},
    ]

    const initialState = {
        proyectos : [],
        formulario: false,
        errorformulario: false,
        proyecto: null,
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch ] = useReducer( proyectoReducer, initialState )

    // func del crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4();

        //insert dl proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto,
        })
    }

    // VALIDA FORM
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    // selecciona el proyecto q el user dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // ELIMINA proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
            >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;