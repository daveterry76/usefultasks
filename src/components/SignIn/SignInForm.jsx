import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const SignInForm = () => {

  const { name, email, setName, setEmail } = useContext(AuthContext);

  return (
    <>
        <div>
            <label>Name:</label><br/>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='rounded-md border px-3 py-2 w-72 my-2' 
                type="text" 
            /><br />
            <label>Email:</label><br />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='rounded-md border px-3 py-2 w-72 my-2' 
                type="email" 
            /><br/>
            {/* <label>Password:</label><br/>
            <input 
                className='rounded-md border px-3 py-2 w-72 my-2' 
                type="password" 
            /> */}
        </div>
    </>
  )
}

export default SignInForm