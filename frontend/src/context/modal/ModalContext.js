import { createContext, useReducer } from "react";
import modalReducer from "./ModalReducer";

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {

    const initialState = {
        isModal: false,
    }

    const [state, dispatch] = useReducer(modalReducer, initialState,)

    const showModal = (content) => {
        dispatch({
            type: 'SHOW_MODAL',
            payload: {
                isModal: true,
                content,
            }
        })
    }

    const hideModal = () => {
        dispatch({
            type: 'HIDE_MODAL',
            payload: {
                isModal: false
            },
        })
    }

    return (
        <ModalContext.Provider value={{
            state,
            showModal,
            hideModal,
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext