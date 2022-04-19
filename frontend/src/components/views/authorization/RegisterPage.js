import axios from 'axios'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StoreContext from '../../../context/store/StoreContext'
import RegisterForm from '../../shared/forms/RegisterForm'

const RegisterPage = () => {

    const { loginUser, showToast } = useContext(StoreContext)
    const navigate = useNavigate()

    // Form On Submit
    const registerUser = async (formStates) => {

        if (formStates.password !== formStates.passwordConfirm) {
            showToast(`Passwords don't match!`, false)
            return
        }

        const userData = {
            first: formStates.firstName,
            last: formStates.secondName,
            email: formStates.email,
            pw: formStates.password,
            address1: formStates.address,
            address2: formStates.secondaryAddress,
            phone: formStates.phone,
            auth: 0,
            status: 0,
        }

        /* Send data to API to register a new user */
        const config = {
            method: 'post',
            url: 'https://mina-ecommerce1.herokuapp.com/api/users',
            headers: {
                'Content-Type': 'application/json'
            },
            data: userData
        }
        const res = await axios(config)

        const storage = {
            id: res.data.user.id,
            authToken: res.data.token
        }
        localStorage.setItem('token', JSON.stringify(storage))
        const data = {
            user: res.data.user,
            authToken: res.data.token,
        }
        loginUser(data)

        /*redirect to Home page */
        navigate('/')

        console.log(userData)
    }

    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="text-center text-1xl">Logo</h2>
                        {/* ToDo add logo*/}
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
                        <div className='flex flex-col items-center mt-4 space-y-0'>
                            <p>
                                Already have an account?
                            </p>
                            <Link to='/login' type='button' className="mt-5 font-medium text-indigo-600 hover:text-indigo-500">
                                Log in
                            </Link>
                        </div>
                    </div>
                    <RegisterForm onSubmit={registerUser} withPW={true} />
                </div>
            </div>
        </>
    )
}

export default RegisterPage