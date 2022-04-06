import { LockClosedIcon } from '@heroicons/react/solid'
import { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../../context/user/UserContext'
import axios from 'axios'

const LoginPage = () => {

  // Connect to context
  const { state, loginUser } = useContext(UserContext)

  // Form States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (state.authed) navigate('/')
  }, [navigate, state])

  // Form On Submit
  const login = async (e) => {
    e.preventDefault()

    const credentials = {
      email,
      password,
      rememberMe,
    }

    /* To Do send data to API to login */
    const res = await axios.get('/api/users')
    console.log(res.data)

    // Fake api response
    const apiResponse = {
      name: 'megz',
      email: 'megz@gmail.com',
      authToken: 'Baerer token',
    }

    // Dispatch the action to the state
    loginUser(apiResponse)

    console.log(credentials)
  }

  // Form on forgot username
  const forgetUsername = () => {

  }

  // Form on forgot password
  const forgetPassword = () => {
    /* To Do hit password reset API */
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-1xl">Logo</h2>
            {/* ToDo add logo*/}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
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
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  value={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className='container p-4'>
                <p className='text-center text-xs text-gray-500'>
                  Remember to log out afterwards if you’re using a shared computer, for example in a library or school.
                </p>
              </div>

            </div>

            <div className='flex flex-col justify-center items-center'>
              <button
                type="submit"
                className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Log in
              </button>
              <div className='flex flex-row space-x-5 p-4'>
                <div className="text-sm">
                  <button onClick={() => forgetUsername()} type='button' className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot Username?
                  </button>
                </div>
                <div>
                  <span className='text-gray-400'>|</span>
                </div>
                <div className="text-sm">
                  <button onClick={() => forgetPassword()} type='button' className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </button>
                </div>
              </div>
              <div className='flex flex-col items-center space-y-0'>
                <span>Don't have an account?</span>
                <Link to='/register' type='button' className="mt-5 font-medium text-indigo-600 hover:text-indigo-500">
                  Create one
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage