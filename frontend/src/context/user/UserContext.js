import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";

const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const initialState = {
        name: '',
        email: '',
        authToken: '',
        authed: false,
    }

    const [state, dispatch] = useReducer(userReducer, initialState,)

    const loginUser = (userData) => {
        dispatch({
            type: 'LOGIN_USER',
            payload: {
                ...userData,
                authed: true,
            }
        })
    }
    
    const logoutUser = () => {
        dispatch({
            type: 'LOGOUT_USER',
            payload: initialState,
        })
    }

    return (
        <UserContext.Provider value={{
            state,
            logoutUser,
            loginUser,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext