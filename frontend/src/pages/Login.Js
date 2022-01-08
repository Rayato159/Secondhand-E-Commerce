import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

import './Login.css'

const Login = () => {

    // React Hook
    const [user, setUser] = useState(null)
    const [remember, setRemember] = useState(false)
    const [isPending, setIsPending] = useState(false)

    // Navigate
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        const {
            email,
            password,
            remember,
        } = data

        setUser({ email, password })
     })

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
                                <label htmlFor="" className="flex text-sm">
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
                                    <div className="text-sm text-red-500">Email is required</div>
                                }
                                {
                                    errors.email?.type === "pattern" &&
                                    <div className="text-sm text-red-500">Invalid email pattern</div>
                                }
                            </div>

                            <div>
                                <label htmlFor="" className="flex text-sm font-bold">
                                    <div className="font-bold">Password</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "password", 
                                            { 
                                                required: true,
                                            }
                                        )
                                    }
                                type="password" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300" />
                                {
                                    errors.password?.type === "required" &&
                                    <div className="text-sm text-red-500">Password is required</div>
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