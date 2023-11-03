import React from 'react'

const SignInForm = () => {
  return (
    <>
        <div>
            <label>Email:</label><br />
            <input 
                className='rounded-md border px-3 py-2 w-72 my-2' 
                type="email" 
            /><br/>
            <label>Password:</label><br/>
            <input 
                className='rounded-md border px-3 py-2 w-72 my-2' 
                type="password" 
            />
        </div>
    </>
  )
}

export default SignInForm