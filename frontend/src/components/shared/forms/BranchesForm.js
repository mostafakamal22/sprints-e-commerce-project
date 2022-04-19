import { LockClosedIcon } from '@heroicons/react/outline'
import React, { useContext, useState } from 'react'
import StoreContext from '../../../context/store/StoreContext'

/** 
*   to use the form you must provide an onSubmit func to run once the form is submitted
*   and if you want the form to have pre filled data provide it as initStates prope
*/

const BranchesForm = ({ onSubmit, initStates }) => {

    const { setLoading, store } = useContext(StoreContext)

    const [name, setName] = useState(initStates ? initStates.name : '')
    const [phone1, setPhone1] = useState(initStates ? initStates.phone1 : '')
    const [phone2, setPhone2] = useState(initStates ? initStates.phone2 : '')
    const [address, setAddress] = useState(initStates ? initStates.address : '')
    const [googleMaps, setGoogleMaps] = useState(initStates ? initStates.googleMaps : '')

    // runs the onSubmit func provided as a prope giving it all the state so you can use it
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const formStates = {
            id: initStates ? initStates.id : 0,
            name,
            phone1,
            phone2,
            address,
            googleMaps,
        }
        onSubmit(formStates)
        setLoading(false)
    }

    return (
        <div>
            <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)} >
                <input type="hidden" name="remember" defaultValue="true" />
                <div>
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Branch Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="address" className="sr-only">
                        Address
                    </label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Branch Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="sr-only">
                        Phone
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Phone Number 1"
                        value={phone1}
                        onChange={(e) => setPhone1(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="sr-only">
                        Phone
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Phone Number 2"
                        value={phone2}
                        onChange={(e) => setPhone2(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="googleMaps" className="sr-only">
                        Phone
                    </label>
                    <input
                        id="googleMaps"
                        name="googleMaps"
                        type="url"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Location on Maps"
                        value={googleMaps}
                        onChange={(e) => setGoogleMaps(e.target.value)}
                    />
                </div>

                <div className='flex justify-center'>
                    {store.loading
                        ? (<button
                            disabled
                            type="submit"
                            className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Create Account
                        </button>)
                        : (<button
                            type="submit"
                            className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            {!initStates ? 'Create Branch' : 'Save'}
                        </button>)}


                </div>
            </form>
        </div>
    )
}

export default BranchesForm