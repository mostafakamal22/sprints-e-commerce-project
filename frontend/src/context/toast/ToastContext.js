import { createContext, useReducer } from "react";
import toastReducer from "./ToastReducer";

const ToastContext = createContext()

export const ToastProvider = ({ children }) => {

    const initialState = {
        isToast: false,
        text: '',
        isSuccess: true,
    }

    const [state, dispatch] = useReducer(toastReducer, initialState,)

    const showToast = (text, isSuccess) => {
        dispatch({
            type: 'SHOW_TOAST',
            payload: {
                isToast: true,
                text,
                isSuccess,
            }
        })
    }

    const hideToast = () => {
        dispatch({
            type: 'HIDE_TOAST',
            payload: {
                isToast: false
            },
        })
    }

    return (
        <ToastContext.Provider value={{
            state,
            showToast,
            hideToast,
        }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastContext