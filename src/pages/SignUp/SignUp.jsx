import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { SignUpAuth } from '../../utils/api/auth.api';
import {Link, useNavigate} from 'react-router-dom'
const SignUp = () => {
    const [auth, setAuth] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
const navigate = useNavigate()
    const handleSignUp = async (e) => {
        e.preventDefault();
        if (auth.confirmPassword !== auth.password) {
            toast.error('Passwords do not match')
        }
        else {
            try {
                const response=await SignUpAuth({
                    username: auth.username,
                    email: auth.email,
                    password: auth.password,
                });
                toast.success(response.data.message);
                navigate("/signin");
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong");
            }
        }
    }
    return (
        <div className='w-screen h-screen bg-green-100 flex justify-around items-center '>
            <div className='w-[70%] h-[70%] flex'>
                <div className='flex flex-col justify-center' style={{ flex: 1 }}>
                    <h1 className='flex text-green-600'>
                        <span className='text-4xl font-extrabold'>S</span>
                        <span className='text-3xl font-bold'>media...</span>
                    </h1>
                    <span className='text-lg font-semibold'>Connect with Friends on Smedia</span>
                </div>
                <div className='flex flex-col justify-center' style={{ flex: 1 }}>
                    <form onSubmit={handleSignUp} className='bg-white h-[400px] p-[20px] rounded-md flex flex-col justify-between shadow-lg'>
                        <input
                            type="text"
                            placeholder='Username'
                            onChange={(e) => {
                                setAuth({
                                    ...auth,
                                    username: e.target.value,
                                })
                            }}
                            className='h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none'
                            required
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            onChange={(e) => {
                                setAuth({
                                    ...auth,
                                    email: e.target.value,
                                })
                            }}
                            className='h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none'
                            required
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            onChange={(e) => {
                                setAuth({
                                    ...auth,
                                    password: e.target.value,
                                })
                            }}
                            className='h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none'
                            required
                        />
                        <input
                            type="password"
                            placeholder='Confirm password'
                            onChange={(e) => {
                                setAuth({
                                    ...auth,
                                    confirmPassword: e.target.value,
                                })
                            }}
                            className='h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none'
                            required
                        />
                        <button className=' h-[50px] rounded-lg bg-green-600 hover:bg-green-700 transition text-white text-lg font-bold' type='submit'>SignUp</button>
                        <button className=' h-[50px] rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-bold self-center p-4'><Link to={'/signin'} >Login into Your Account</Link></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp