import React from 'react'
import Logo from '../components/Logo'
import SignUpBtn from '../components/SignUp/SignUpBtn'
import SignUpForm from '../components/SignUp/SignUpForm'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
        <Logo />
        <div className='rounded-md px-3 py-8 flex flex-col gap-3 border'>
            <h3 className='text-2xl text-green-600 font-semibold'>Sign Up</h3>
            <SignUpForm />
            <SignUpBtn />
            <Link className='underline text-green-400 font-medium' to='/'>Already have an account? Sign in.</Link>
        </div>
    </>
  )
}

export default SignUp