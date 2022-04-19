import React from 'react'
import { Link } from 'react-router-dom'

const AdminToolbar = () => {

    const taps = [
        {
            name: "Users Tool",
            to: '/admin/dashboard/users'
        },
        {
            name: "Braches Tool",
            to: '/admin/dashboard/branches'
        },
        {
            name: "Brands Tool",
            to: '/admin/dashboard/brands'
        },
        {
            name: "Coupons Tool",
            to: '/admin/dashboard/coupons'
        },
        {
            name: "Images Tool",
            to: '/admin/dashboard/images'
        },
        {
            name: "Orders Tool",
            to: '/admin/dashboard/orders'
        },
        {
            name: "Products Tool",
            to: '/admin/dashboard/products'
        },
        {
            name: "Categories Tool",
            to: '/admin/dashboard/categories'
        },
        {
            name: "Analytics Tool",
            to: '/admin/dashboard/'
        },
    ]

    return (
        <div className="flex flex-wrap justify-evenly w-full mt-6">
            {taps.map((tap, i) => (
                <Link to={tap.to} key={i} className="group relative flex-grow flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                    {tap.name}
                </Link>
            ))}
        </div>
    )
}

export default AdminToolbar