import axios from "axios"
import { useContext, useEffect, useState } from "react"
import ToastContext from "../../../context/toast/ToastContext"
import Navbar from "../../shared/Navbar"
import AddAdminForm from "../adminTools/AddAdminForm"

const AdminDashboard = () => {

    const { showToast } = useContext(ToastContext)

    // Component States
    const [showAddForm, setShowAddForm] = useState(false)

    useEffect(() => {
        axios.get('/api/users').then(res => {
            console.log(res)
        })
    }, [])

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm)

        // Test the toast here!!! (text, success or error >> true and false)
        showToast('toast text message', true /* Success */)
    }

    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl">Admin Dashboard</h1>
            <div className="flex justify-center w-full mt-6">
                <button onClick={() => toggleAddForm()} className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add Admin
                </button>
            </div>
            {showAddForm ? <AddAdminForm /> : null}
        </div>
    )
}

export default AdminDashboard