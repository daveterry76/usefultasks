import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import SignInBtn from '../components/SignIn/SignInBtn'
import SignInForm from '../components/SignIn/SignInForm'

const SignIn = () => {
  return (
    <>
        <Logo />
        <div className='rounded-md px-3 py-8 flex flex-col gap-6 border'>
            <h3 className='text-2xl text-green-600 font-semibold'>Sign In</h3>
            <SignInForm />
            <SignInBtn />
            <Link className='underline text-green-400 font-medium' to='/signup'>Don't have an account? Sign up.</Link>
        </div>
    </>
  )
}

export default SignIn