import { Routes, Route } from 'react-router'
import Home from './Home';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const App = () => {
  return (
    <div>
      <Routes>
        {/* test route (will be optimized later) */}
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
