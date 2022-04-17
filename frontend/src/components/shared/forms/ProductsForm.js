import { LockClosedIcon } from '@heroicons/react/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Upload from '../../../firebase/upload'

/** 
*   to use the form you must provide an onSubmit func to run once the form is submitted
*   and if you want the form to have pre filled data provide it as initStates prope
*/

const ProductsForm = ({ onSubmit, initStates }) => {
    // Form States
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [id, setID] = useState(initStates ? initStates.id : '')
    const [name, setName] = useState(initStates ? initStates.name : '')
    const [description, setDescription] = useState(initStates ? initStates.phone1 : '')
    const [coverImage, setCoverImage] = useState(initStates ? initStates.phone2 : '')
    const [price, setPrice] = useState(initStates ? initStates.address : 0)
    const [introDate, setIntroDate] = useState(initStates ? initStates.googleMaps : Date.now())
    const [brand, setBrand] = useState(initStates ? initStates.googleMaps : 0)
    const [category, setCategory] = useState(initStates ? initStates.googleMaps : 0)
    const [featured, setFeatured] = useState(initStates ? initStates.googleMaps : 0)
    const [isNew, setIsNew] = useState(initStates ? initStates.googleMaps : 0)
    const [review, setReview] = useState(initStates ? initStates.googleMaps : 0)
    const [tag, setTag] = useState(initStates ? initStates.googleMaps : '')

    // func to load the updated data from the DB
    const loadData = async () => {
        setLoading(true)
        const config1 = {
            method: 'get',
            url: 'https://mina-ecommerce1.herokuapp.com/api/brands',
        }
        await axios(config1).then(res => {
            setBrands(res.data)
        })
        const config2 = {
            method: 'get',
            url: 'https://mina-ecommerce1.herokuapp.com/api/categories',
        }
        await axios(config2).then(res => {
            setCategories(res.data)
        }).then(() => setLoading(false))
    }

    useEffect(() => {
        loadData()
    }, [])

    // runs the onSubmit func provided as a prope giving it all the state so you can use it
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const formStates = {
            id,
            loading,
            name,
            description,
            coverImage,
            price,
            brand,
            category,
            featured,
            isNew,
            review,
            tag,
        }
        console.log(formStates)
        // onSubmit(formStates)
        setLoading(false)
    }

    return (
        <div>
            <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <label htmlFor="name" className="sr-only">
                        Product Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="sr-only">
                        Product Description
                    </label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Product Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='flex flex-row justify-between'>
                    <Upload setCoverImage={setCoverImage} setLoading={setLoading} />
                    <div className='w-1/2 grid place-items-center'>
                        <label htmlFor="price" className="justify-self-end">
                            Product Price
                        </label>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            required
                            className="appearance-none relative block w-1/2 px-3 py-2 justify-self-end border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-2/5'>
                        <label htmlFor="brand">
                            Brand
                        </label>
                        <select
                            id="brand"
                            name="brand"
                            type="select"
                            required
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Select Brand"
                            value={brand}
                            onChange={(e) => {
                                const i = e.target.options.selectedIndex
                                const id = e.target.options[i].id
                                setBrand(id)
                            }}
                        >
                            {brands.map(brand => (
                                <option key={brand.id} id={brand.id}>{brand.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='w-2/5'>
                        <label htmlFor="category">
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            type="select"
                            required
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Select category"
                            value={category}
                            onChange={(e) => {
                                const i = e.target.options.selectedIndex
                                const id = e.target.options[i].id
                                setCategory(id)
                            }}
                        >
                            {categories.map(category => (
                                <option key={category.id} id={category.id}>{category.id}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex justify-between w-2/5'>
                        <label htmlFor="featured">
                            Featured?
                        </label>
                        <input
                            id="featured"
                            name="featured"
                            type="checkbox"
                            className="appearance-none relative block px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm"
                            placeholder="Select category"
                            value={featured}
                            onChange={(e) => setFeatured(e.target.checked)}
                        >
                        </input>
                    </div>
                    <div className='flex justify-between w-2/5'>
                        <label htmlFor="isNew">
                            Is New?
                        </label>
                        <input
                            id="isNew"
                            name="isNew"
                            type="checkbox"
                            className="appearance-none relative block px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm"
                            placeholder="Select category"
                            value={isNew}
                            onChange={(e) => setIsNew(e.target.checked)}
                        >
                        </input>
                    </div>
                </div>
                <div>
                    <label htmlFor="tag" className="sr-only">
                        Product Tag
                    </label>
                    <input
                        id="tag"
                        name="tag"
                        type="text"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Product Tag"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                </div>

                <div className='flex justify-center'>
                    {loading
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
                            {!initStates ? 'Create Product' : 'Save'}
                        </button>)
                        : (<button
                            type="submit"
                            className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            {!initStates ? 'Create Product' : 'Save'}
                        </button>)}


                </div>
            </form>
        </div>
    )
}

export default ProductsForm