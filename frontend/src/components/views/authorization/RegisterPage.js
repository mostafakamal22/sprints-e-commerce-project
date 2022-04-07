import { LockClosedIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {

    // Form States
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    // Form On Submit
    const registerUser = (e) => {
        e.preventDefault()

        const userData = {
            name,
            email,
            password,
        }

        /* Send data to API to register a new user */
        axios.post('/users/register', userData).then(res => console.log(res))

        /*redirect to login page */
        navigate('/login')

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
                    <form className="mt-8 space-y-6" onSubmit={(e) => registerUser(e)} >
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="none"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
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
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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

                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Create Account
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage