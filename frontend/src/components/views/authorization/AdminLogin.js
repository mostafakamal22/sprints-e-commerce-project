import { LockClosedIcon } from '@heroicons/react/solid'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../../context/user/UserContext'
import axios from 'axios'

const AdminLogin = () => {

    // Connect to context
    const { loginUser } = useContext(UserContext)

    const navigate = useNavigate()

    // Form States
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Form On Submit
    const login = async (e) => {
        e.preventDefault()

        setLoading(true)

        const credentials = {
            email,
            password,
        }

        /* Send data to API to login */
        const res = await axios.get('/api/users', credentials)
        console.log(res.data)

        // Fake api response
        const apiResponse = {
            user: {
                id: 123,
                firstName: 'Admin Name',
                secondName: '',
                email: 'email',
                password: 'password',
                address: '',
                secondaryAddress: '',
                phone: '',
                userType: 1,
                status: 0,
            },
            authToken: 'Baerer token',
        }

        // Dispatch the action to the state
        loginUser(apiResponse)

        // Save token to local storage
        const storage = {
            id: apiResponse.user.id,
            authToken: apiResponse.authToken
        }
        localStorage.setItem('token', JSON.stringify(storage))
        setLoading(false)
        navigate('/admin/dashboard')

        console.log(credentials)
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="text-center text-1xl">Logo</h2>
                    {/* ToDo add logo*/}
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => login(e)} >
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-between">
                        <div className='container p-4'>
                            <p className='text-center text-xs text-gray-500'>
                                Remember to log out afterwards if you’re using a shared computer, for example in a library or school.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        {loading
                            ? (
                                <button
                                    disabled
                                    type="submit"
                                    className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg>
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Logging in...
                                </button>
                            )
                            : (
                                <button
                                    type="submit"
                                    className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Log in
                                </button>
                            )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin