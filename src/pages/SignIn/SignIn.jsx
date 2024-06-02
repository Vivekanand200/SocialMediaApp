import React, { useContext, useState } from 'react'
import { SignInAuth } from '../../utils/api/auth.api';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  })
  const {user,isFetching, dispatch,error} = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    SignInAuth({email:auth.email, password:auth.password},dispatch);
  };

  return (
    <div className='w-screen h-screen bg-green-100 flex  justify-around items-center '>
      <div className='w-[70%] h-[70%] md:flex '>
        <div className='flex flex-col justify-center' style={{ flex: 1 }}>
          <h1 className='flex text-green-600'>
            <span className='text-4xl font-extrabold'>S</span>
            <span className='text-3xl font-bold'>media...</span>
          </h1>
          <span className='text-lg font-semibold'>Connect with Friends on Smedia</span>
        </div>
        <div className='flex flex-col justify-center' style={{ flex: 1 }}>
          <form onSubmit={handleSignIn}>
            <div className='bg-white h-[300px] p-[20px] rounded-md flex flex-col justify-between shadow-lg'>
              <input
                type="email"
                placeholder='Email'
                className='h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none'
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    email: e.target.value,
                  })
                }}
                required
              />
              <input
                type="password"
                placeholder='Password'
                className='h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none'
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    password: e.target.value,
                  })
                }}
              required
              minLength={3}
              />
              <button className=' h-[50px] rounded-lg bg-green-600 hover:bg-green-700 transition text-white text-lg font-bold' type='submit'>{isFetching ? "Signing In" : "SignIn"}</button>
              <span className='text-center text-green-500 cursor-pointer'>forget password?</span>
              <button className=' h-[50px] rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-bold self-center p-4 flex justify-center  items-center'><Link to={"/signup"} className='flex justify-center flex-col items-center' >Create New Account</Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn