import axios from "axios";
import { createContext, useReducer } from "react";
import storeReducer from "./StoreReducer";

const StoreContext = createContext()

export const StoreProvider = ({ children }) => {

    const initialState = {
        auth: {
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
            token: '',
            authed: false,
        },
        toast: {
            isToast: false,
            text: '',
            isSuccess: true,
        },
        modal: {
            isModal: false,
        },
        appData: {
            users: [],
            branches: [],
            brands: [],
            products: [],
            categories: [],
            coupons: [],
            orders: [],
        },
        loading: false
    }

    const [store, dispatch] = useReducer(storeReducer, initialState)

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

    const showModal = (content) => {
        
        const body = document.getElementById('body')
        body.classList.toggle('overflow-hidden')

        dispatch({
            type: 'SHOW_MODAL',
            payload: {
                isModal: true,
                content,
            }
        })
    }

    const hideModal = () => {

        const body = document.getElementById('body')
        body.classList.toggle('overflow-hidden')
        
        dispatch({
            type: 'HIDE_MODAL',
            payload: {
                isModal: false
            },
        })
    }

    const setAppData = async () => {
        const usersConfig = {
            method: 'get',
            url: 'https://mina-jpp1.herokuapp.com/api/users',
        }
        const users = await (await axios(usersConfig)).data

        const brandsConfig = {
            method: 'get',
            url: 'https://mina-jpp1.herokuapp.com/api/brands',
        }
        const brands = await (await axios(brandsConfig)).data

        const categoriesConfig = {
            method: 'get',
            url: 'https://mina-jpp1.herokuapp.com/api/categories',
        }
        const categories = await (await axios(categoriesConfig)).data

        const branchesConfig = {
            method: 'get',
            url: 'https://mina-jpp1.herokuapp.com/api/branches',
        }
        const branches = await (await axios(branchesConfig)).data

        const productsConfig = {
            method: 'get',
            url: 'https://mina-jpp1.herokuapp.com/api/products',
        }
        const products = await (await axios(productsConfig)).data

        const couponsConfig = {
            method: 'get',
            url: 'https://mina-jpp1.herokuapp.com/api/coupons',
        }
        const coupons = await (await axios(couponsConfig)).data
        
        const ordersConfig = {
            method: 'get',
            url: 'https://mina-jpp1.herokuapp.com/api/orders',
        }
        const allOrders = await (await axios(ordersConfig)).data
        const orders = allOrders.filter(o => o.status !== 0)

        dispatch({
            type: 'SET_DATA',
            payload: {
                users,
                brands,
                categories,
                branches,
                products,
                coupons,
                orders,
            }
        })
    }

    const setLoading = (value) => {
        dispatch({
            type: 'SET_LOADING',
            payload: value
        })
    }

    return (
        <StoreContext.Provider value={{
            store,
            logoutUser,
            loginUser,
            showToast,
            hideToast,
            showModal,
            hideModal,
            setAppData,
            setLoading,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContext