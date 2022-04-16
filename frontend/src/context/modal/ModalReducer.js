import { logger } from "../middleware/logger"

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      logger(state, action)
      return action.payload
    case 'HIDE_MODAL':
      logger(state, action)
      return action.payload
    default:
      return state
  }
}

export default modalReducer
