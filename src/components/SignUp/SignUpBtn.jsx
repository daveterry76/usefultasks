import useSignUp from '../../hooks/useSignUp';

const SignUpBtn = () => {

    const signUp = useSignUp();


  return (
<>
        <div className='flex justify-center'>
            <button
                className='text-white rounded-md bg-green-600 hover:bg-green-400 w-full cursor-pointer py-2'
                onClick={signUp}
            >
                SIGN UP
            </button>
        </div>
    </>  )
}

export default SignUpBtn