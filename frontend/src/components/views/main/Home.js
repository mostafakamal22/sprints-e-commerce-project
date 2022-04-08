import { useProtect } from '../../../hooks/useProtect'
import Navbar from '../../shared/Navbar'

const Home = () => {

    useProtect('/')

    return (
        <div className="bg-white">
            <Navbar />
            <h1 className='text-center text-2xl'>Home page</h1>
        </div>
    )
}

export default Home