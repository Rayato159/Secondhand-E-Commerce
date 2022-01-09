import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom';

import './Login.css'

const Login = () => {

    // React Hook
    const [remember, setRemember] = useState(false)
    const [isHidePassword, setIsHidePassword] = useState(true)
    const [accessToken, setAccessToken] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        const {
            email,
            password,
            remember,
        } = data

        saveUser(email, password)
    })

    const eventHidePassword = () => {
        setIsHidePassword(!isHidePassword)
    }

    const saveUser = async (email, password) => {
        try {
            const res = await fetch('http://localhost:3000/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            })

            const token = await res.json()

            setAccessToken(token.accessToken)
        } catch (e) {
            setAccessToken(e)
        }
    }

    console.log(accessToken)

    if(accessToken) {
        return (
            <Navigate to="/:id/profile" />
        )
    }

    return (
        <div className="Login">
            <div className="flex flex-col max-w-md mx-auto justify-center">
                <div className="md:border md:border-gray-300 md:shadow-sm rounded p-8 md:my-12">
                    <div className="flex flex-col justify-center">

                        <div className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <div className="font-bold text-2xl text-center">
                                Login
                            </div>
                        </div>

                        <form className="space-y-2" onSubmit={onSubmit}>

                            <div>
                                <label htmlFor="" className="flex text-sm items-center">
                                    <div className="font-bold">Email</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "email", 
                                            {
                                                required: true, 
                                                pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                                            }
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"  placeholder="mongsue@example.com"/>
                                {
                                    errors.email?.type === "required" &&
                                    <div className="text-sm text-red-500">email is required</div>
                                }
                                {
                                    errors.email?.type === "pattern" &&
                                    <div className="text-sm text-red-500">invalid email pattern</div>
                                }
                            </div>

                            <div>
                                <label htmlFor="" className="flex text-sm font-bold items-center">
                                    <div className="font-bold">Password</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <div className="relative flex items-center justify-end">
                                    <input 
                                        {...register(
                                                "password", 
                                                { 
                                                    required: true,
                                                }
                                            )
                                        }
                                    type={isHidePassword? "password":"text"} className="relative w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300" />
                                    {isHidePassword?
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute mx-2 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={eventHidePassword}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                        :<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute mx-2 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={eventHidePassword}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    }
                                </div>
                                {
                                    errors.password?.type === "required" &&
                                    <div className="text-sm text-red-500">password is required</div>
                                }
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input 
                                        {...register(
                                                "remember",
                                            )
                                        } 
                                        type="checkbox" className="h-4 w-4 rounded focus:border-slate-300 focus:ring-1 focus:ring-slate-300" />
                                    <label htmlFor="" className="ml-2 text-sm">Remember me</label>
                                </div>
                                <div className="text-sm text-blue-500 hover:text-blue-400 cursor-pointer">forget password?</div>
                            </div>

                            <div>
                                <button className="w-full bg-amber-500 hover:bg-amber-400 text-amber-800 rounded p-2 my-3">Login</button>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login