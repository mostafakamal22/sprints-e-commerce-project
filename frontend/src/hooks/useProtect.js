import { useEffect } from "react"
import { useNavigate } from "react-router"

export const useProtect = (target) => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            navigate(target)
        }
    }, [navigate, target])
}