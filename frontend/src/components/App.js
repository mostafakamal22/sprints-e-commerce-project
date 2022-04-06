import { Routes, Route } from 'react-router'
import { UserProvider } from '../context/user/UserContext';
import LoginPage from './views/authorization/LoginPage';
import RegisterPage from './views/authorization/RegisterPage';
import Home from './views/main/Home';

const App = () => {
  return (
    <UserProvider>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    </UserProvider>
  )
}

export default App;
