import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd, MdDelete, MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'
import StoreContext from '../../../context/store/StoreContext'
import BrandsForm from '../../shared/forms/BrandsForm'
import Spinner from '../../shared/Spinner'

export const AnalyticsTool = () => {

  const { store, showModal, hideModal, setAppData } = useContext(StoreContext)

  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    const config = {
      method: "get",
      url: `https://mina-jpp1.herokuapp.com/api/store/admin?token=${store.auth.token}`,
    };
    axios(config).then(res => {
      setSearchResults(res.data)
      setLoading(false)
    })
  }, [])

  // submit the add form
  const handleAddSubmit = async (formStates) => {

    setLoading(true)

    const brandData = {
      name: formStates.name,
      origin: formStates.origin,
    }

    /* Send data to API to register a new user */
    const config = {
      method: 'post',
      url: `https://mina-jpp1.herokuapp.com/api/brands?token=${store.auth.token}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: brandData
    }
    const res = await axios(config)
    console.log(res)
    hideModal()
    setAppData()
    setLoading(false)
  }

  // open the modal and fill it's content 
  const modalAdd = () => {
    // modal content
    const Content = () => {
      return (
        <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Brand</h3>
          <BrandsForm onSubmit={handleAddSubmit} />
        </div>
      )
    }
    showModal(Content)
  }

  // submit the edit form
  const handleEditSubmit = async (formStates) => {
    setLoading(true)
    const brandData = {
      name: formStates.name,
      origin: formStates.origin,
    }

    /* Send data to API to register a new user */
    const config = {
      method: 'put',
      url: `https://mina-jpp1.herokuapp.com/api/brands/${formStates.id}?token=${store.auth.token}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: brandData
    }
    const res = await axios(config)
    console.log(res)
    hideModal()
    setAppData()
    setLoading(false)
  }

  // opens edit modal
  const modalEdit = (index) => {
    const initStates = {
      id: store.appData.brands[index].id,
      name: store.appData.brands[index].name,
      origin: store.appData.brands[index].origin,
    }

    // fills the content for the edit modal
    const Content = () => {
      return (
        <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Brand</h3>
          <BrandsForm onSubmit={handleEditSubmit} initStates={initStates} />
        </div>
      )
    }

    showModal(Content)
  }

  const handleDelete = async (index) => {
    setLoading(true)
    const bid = store.appData.brands[index].id
    /* Send data to API to register a new user */
    const config = {
      method: 'delete',
      url: `https://mina-jpp1.herokuapp.com/api/brands/${bid}?token=${store.auth.token}`,
    }
    const res = await axios(config)
    setAppData()
    setLoading(false)
    console.log(res)
  }

  return (
    <>
      {loading
        ? (
          <Spinner />
        )
        : (
          <div className='grid place-items-center'>
            <h1 className='text-left text-xl font-medium p-6 text-gray-700'>Analytics Data</h1>
            <div className='max-w-2xl px-6'>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4 flex">
                  <label htmlFor="table-search" className="sr-only">Search</label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input
                      onChange={(e) => {
                        if (e.target.value !== '') {
                          setSearchResults(store.appData.brands.filter(user => user.first_name.toLowerCase().includes(e.target.value)))
                        } else {
                          setSearchResults(store.appData.brands)
                        }
                      }}
                      type="text"
                      id="table-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                  </div>
                  <button onClick={() => modalAdd()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <MdAdd size={30}></MdAdd> Add
                  </button>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Data
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(searchResults).map((data, i) => (
                      <tr key={i} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          {data}
                        </th>
                        <td className="px-6 py-4">
                          {searchResults[data]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        )}
    </>
  )
}
