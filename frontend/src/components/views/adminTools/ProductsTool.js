import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MdAdd, MdDelete, MdEdit } from 'react-icons/md'
import StoreContext from '../../../context/store/StoreContext'
import ProductsForm from '../../shared/forms/ProductsForm'

const ProductsTool = () => {

  const { store, showModal, hideModal, setLoading, setAppData } = useContext(StoreContext)

  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setSearchResults(store.appData.products)
  }, [store])

  // submit the add form
  const handleAddSubmit = async (formStates) => {
    setLoading(true)

    const productData = {
      name: formStates.name,
      description: formStates.description,
      coverimage: formStates.coverImage,
      price: formStates.price,
      brand: formStates.brand,
      category: formStates.category,
      featured: formStates.featured,
      new: formStates.isNew,
      review: formStates.review,
      tag: formStates.tag,
    }

    /* Send data to API to register a new user */
    const config = {
      method: 'post',
      url: `https://mina-jpp1.herokuapp.com/api/products?token=${store.auth.token}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: productData
    }
    const res = await axios(config)
    console.log(res)
    setAppData()
    hideModal()
    setLoading(false)
  }

  // open the modal and fill it's content 
  const modalAdd = () => {
    const Content = () => {
      return (
        <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Product</h3>
          <ProductsForm onSubmit={handleAddSubmit} />
        </div>
      )
    }
    showModal(Content)
  }

  // submit the edit form
  const handleEditSubmit = async (formStates) => {
    setLoading(true)
    const productData = {
      name: formStates.name,
      description: formStates.description,
      coverimage: formStates.coverImage,
      price: formStates.price,
      brand: formStates.brand,
      category: formStates.category,
      featured: formStates.featured,
      new: formStates.isNew,
      review: formStates.review,
      tag: formStates.tag,
    }

    console.log(productData);
    /* Send data to API to register a new user */
    const config = {
      method: 'put',
      url: `https://mina-jpp1.herokuapp.com/api/products/${formStates.id}?token=${store.auth.token}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: productData
    }
    const res = await axios(config)
    console.log(res)
    setAppData()
    hideModal()
    setLoading(false)
  }

  // opens edit modal
  const modalEdit = (index) => {
    const initStates = {
      id: store.appData.products[index].id,
      name: store.appData.products[index].name,
      description: store.appData.products[index].description,
      coverImage: store.appData.products[index].coverimage,
      price: store.appData.products[index].price,
      brand: store.appData.products[index].brand,
      category: store.appData.products[index].category,
      featured: store.appData.products[index].featured,
      isNew: store.appData.products[index].new,
      review: store.appData.products[index].review,
      tag: store.appData.products[index].tag,
    }

    console.log(initStates);

    const Content = () => {
      return (
        <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Product</h3>
          <ProductsForm onSubmit={handleEditSubmit} initStates={initStates} />
        </div>
      )
    }

    showModal(Content)
  }

  const handleDelete = async (id) => {
    setLoading(true)
    const pid = store.appData.products[id].id
    /* Send data to API to register a new user */
    const config = {
      method: 'delete',
      url: `https://mina-jpp1.herokuapp.com/api/products/${pid}?token=${store.auth.token}`,
    }
    const res = await axios(config)
    console.log(res)
    setAppData().then(() => {
      setLoading(false)
    })
  }

  return (
    <>
      {store.loading
        ? (
          <div className="text-center">
            <svg role="status" className="inline mr-2 w-80 h-80 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
        )
        : (
          <div className='grid place-items-center'>
            <h1 className='text-left text-xl font-medium p-6 text-gray-700'>Products Data</h1>
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
                          setSearchResults(store.appData.products.filter(user => user.first_name.toLowerCase().includes(e.target.value)))
                        } else {
                          setSearchResults(store.appData.products)
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
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span>Edit or Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((product, i) => (
                      <tr key={i} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          {product.name}
                        </th>
                        <td className="px-6 py-4">
                          {product.price}
                        </td>
                        <td className="px-6 py-4 flex max-w-fit">
                          <button id={i} onClick={(e) => modalEdit(e.currentTarget.id)} className="group relative flex-grow flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                            <MdEdit />
                          </button>
                          <button id={i} onClick={(e) => handleDelete(e.currentTarget.id)} className="group relative flex-grow flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:bg-rose-700">
                            <MdDelete />
                          </button>
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

export default ProductsTool