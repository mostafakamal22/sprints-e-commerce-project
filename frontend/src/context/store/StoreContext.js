import axios from "axios";
import { createContext, useReducer } from "react";
import storeReducer from "./StoreReducer";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const initialState = {
    auth: {
      user: {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        address1: "",
        address2: "",
        phone: "",
        auth: 0,
        status: 0,
      },
      token: "",
      authed: false,
    },
    toast: {
      isToast: false,
      text: "",
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
      carousels: [],
    },
    loading: false,
  };

  const [store, dispatch] = useReducer(storeReducer, initialState);

  const loginUser = (userData) => {
    dispatch({
      type: "LOGIN_USER",
      payload: {
        ...userData,
        authed: true,
      },
    });
  };

  const logoutUser = () => {
    dispatch({
      type: "LOGOUT_USER",
      payload: initialState,
    });
  };

  const showToast = (text, isSuccess) => {
    dispatch({
      type: "SHOW_TOAST",
      payload: {
        isToast: true,
        text,
        isSuccess,
      },
    });
  };

  const hideToast = () => {
    dispatch({
      type: "HIDE_TOAST",
      payload: {
        isToast: false,
      },
    });
  };

  const showModal = (content) => {
    const body = document.getElementById("body");
    body.classList.toggle("overflow-hidden");

    dispatch({
      type: "SHOW_MODAL",
      payload: {
        isModal: true,
        content,
      },
    });
  };

  const hideModal = () => {
    const body = document.getElementById("body");
    body.classList.toggle("overflow-hidden");

    dispatch({
      type: "HIDE_MODAL",
      payload: {
        isModal: false,
      },
    });
  };

  const setLoading = (value) => {
    dispatch({
      type: "SET_LOADING",
      payload: value,
    });
  };

  const setAppData = async (collection) => {
    const config = {
      method: "get",
      url: `https://mina-jpp1.herokuapp.com/api/${collection}`,
    };
    const res = await (await axios(config)).data;

    dispatch({
      type: "SET_DATA",
      payload: res,
      collection,
    });

    return res
  };

  return (
    <StoreContext.Provider
      value={{
        store,
        logoutUser,
        loginUser,
        showToast,
        hideToast,
        showModal,
        hideModal,
        setAppData,
        setLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
