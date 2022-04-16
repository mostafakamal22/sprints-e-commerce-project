import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";

const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const initialState = {
        user: {
            id: 0,
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            address1: '',
            address2: '',
            phone: '',
            auth: 0,
            status: 0,
        },
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