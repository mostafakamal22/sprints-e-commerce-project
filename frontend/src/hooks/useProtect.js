import axios from "axios";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import UserContext from "../context/user/UserContext";

export const useProtect = () => {
    const navigate = useNavigate();
    const { loginUser, logoutUser } = useContext(UserContext);
    const url = useLocation().pathname;

    useEffect(() => {
        const checkToken = localStorage.getItem('token')
        if (checkToken) {
            const { id, authToken } = JSON.parse(checkToken)
            const config = {
                method: 'get',
                url: `https://mina-ecommerce1.herokuapp.com/api/users/${id}?token=${authToken}`,
                headers: {}
            }
            axios(config).then(res => {
                const userData = {
                    user: res.data,
                    authToken: authToken,
                }
                loginUser(userData)
                if (url === '/login' || url === '/register') {
                    navigate('/')
                }
            })
        } else {
            logoutUser()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
