import { Routes, Route } from 'react-router'
import LoginPage from './LoginPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App;
