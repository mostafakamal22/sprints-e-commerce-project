import { Routes, Route } from 'react-router'
import { UserProvider } from '../context/user/UserContext';
import Home from './Home';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

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
