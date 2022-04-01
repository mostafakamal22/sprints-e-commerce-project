import { logger } from "../middleware/logger"

const userReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        logger(state, action)
        return action.payload
      case 'LOGOUT_USER':
        logger(state, action)
        return action.payload
      default:
        return state
    }
  }
  
  export default userReducer
  