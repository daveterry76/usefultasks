import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Success from './pages/Success';
import Tasks from './pages/Tasks';
import { useNavigate } from 'react-router-dom';

function App() {

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>

  );
}

export default App;
