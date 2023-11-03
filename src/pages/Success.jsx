import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { useEffect } from 'react'

const Success = () => {
  useEffect(() => {
    document.title = 'Sign Up'
  })

  return (
    <>
        <Logo />
        <div className='my-16'>
            <h1 className='leading-loose text-2xl md:text-3xl lg:text-5xl font-sans'>Your account has been <br /> successfully created!</h1>
        </div>
        <Link className='underline text-green-600 font-medium text-xl' to='/'>Go to Sign in.</Link>
    </>
  )
}

export default Success