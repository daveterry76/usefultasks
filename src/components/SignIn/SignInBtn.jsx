import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';

const SignInBtn = () => {

  const { name, setName } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleDisplayName = () => {
    setName(name);
    navigate('/tasks')
  }

  return (
    <>
        <div className='flex justify-center'>
            <button
                className='text-white rounded-md bg-green-600 hover:bg-green-400 w-full cursor-pointer py-2'
                onClick={handleDisplayName}
            >
                SIGN IN
            </button>
        </div>
    </>
  )
}

export default SignInBtn