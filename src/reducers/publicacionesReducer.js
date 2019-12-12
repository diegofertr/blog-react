import { 
  ACTUALIZAR,
  CARGANDO,
  ERROR,
  COM_CARGANDO,
  COM_ERROR,
  COM_ACTUALIZAR
} from '../types/publicacionesTypes'

const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: '',
  comentarios_cargando: false,
  comentarios_error: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTUALIZAR:
      return {
        ...state,
        publicaciones: action.payload,
        cargando: false,
        error: ''
      }

    case COM_ACTUALIZAR:
      return {
        ...state,
        publicaciones: action.payload,
        comentarios_cargando: false,
        comentarios_error: ''
      }

    case CARGANDO:
        return { ...state, cargando: true }
  
    case ERROR:
      return {
        ...state,
        error: action.payload,
        cargando: false
      }

    case COM_CARGANDO:
      return { ...state, comentarios_cargando: true }
  
    case COM_ERROR:
      return {
        ...state,
        comentarios_error: action.payload,
        comentarios_cargando: false
      }

    default: return state
  }
}