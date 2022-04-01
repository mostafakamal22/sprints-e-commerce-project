import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import UserContext from '../context/user/UserContext'
import Navbar from './Navbar'

const Home = () => {

    const { state } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!state.authed) navigate('/login')
    }, [navigate, state])


    return (
        <div className="bg-white">
            <Navbar />
            <h1 className='text-center text-2xl'>Home page</h1>
        </div>
    )
}

export default Home