import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const SignUpForm = () => {

    const { name, email, password, setName, setEmail, setPassword } = useContext(AuthContext);

  return (
    <>
        <div>
            <label>Name:</label><br />
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
            <label>Password:</label><br/>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='rounded-md border px-3 py-2 w-72 my-2' 
                type="password" 
            />
        </div>
        {name}
    </>
  )
}

export default SignUpForm