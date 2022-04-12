import { Routes, Route } from 'react-router'
import { useProtect } from '../hooks/useProtect';
import AdminDashboard from './views/authorization/AdminDashboard';
import LoginPage from './views/authorization/LoginPage';
import RegisterPage from './views/authorization/RegisterPage';
import Home from './views/main/Home';

const App = () => {

  useProtect()

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App;
