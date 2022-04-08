import { Routes, Route } from 'react-router'
import LoginPage from './views/authorization/LoginPage';
import RegisterPage from './views/authorization/RegisterPage';
import Home from './views/main/Home';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App;
