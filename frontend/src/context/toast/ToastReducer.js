import { logger } from "../middleware/logger"

const toastReducer = (state, action) => {
    switch (action.type) {
      case 'SHOW_TOAST':
        logger(state, action)
        return action.payload
      case 'HIDE_TOAST':
        logger(state, action)
        return {
          ...state,
          isToast: action.payload.isToast
        }
      default:
        return state
    }
  }
  
  export default toastReducer
  