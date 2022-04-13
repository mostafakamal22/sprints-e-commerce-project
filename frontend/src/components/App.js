import { Routes, Route } from 'react-router'
import { useProtect } from '../hooks/useProtect';
import Toast from './shared/Toast';
import AdminDashboard from './views/authorization/AdminDashboard';
import LoginPage from './views/authorization/LoginPage';
import RegisterPage from './views/authorization/RegisterPage';
import { Discover } from './views/main/Discover';
import Help from './views/main/Help';
import Home from './views/main/Home';
import { Shop } from './views/main/Shop';
import Special from './views/main/Special';
import Cart from './views/profile/Cart';
import Wishlist from './views/profile/Wishlist';

const App = () => {

  useProtect()

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/help' element={<Help />} />
        <Route path='/special' element={<Special />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
      <div className="container toast-container relative grid place-items-center">
        <Toast />
      </div>
    </div>
  )
}

export default App;
