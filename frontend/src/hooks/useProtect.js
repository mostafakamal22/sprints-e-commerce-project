import axios from "axios"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/user/UserContext"

export const useProtect = (target) => {
    const navigate = useNavigate()
    const { loginUser, logoutUser } = useContext(UserContext)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            axios.get('/api/users').then(res => {
                // Fake api response
                const apiResponse = {
                    user: {
                        firstName: 'firstName',
                        secondName: 'secondName',
                        email: 'email',
                        password: 'password',
                        address: 'address',
                        secondaryAddress: 'secondaryAddress',
                        phone: 'phone',
                        userType: 0,
                        status: 0,
                    },
                    authToken: 'Baerer token',
                }
                loginUser(apiResponse)
                navigate(target)
            })
        } else {
            logoutUser()
        }
    }, [navigate, target, loginUser, logoutUser])
}