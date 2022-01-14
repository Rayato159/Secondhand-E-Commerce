import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

import './Login.css'

// Components
import SubmitButton from '../components/SubmitButton';

const Register = ({ user }) => {

    //Route
    const navigate = useNavigate()

    if(user) {
        navigate('/')
    }

    const { 
        register, 
        handleSubmit,
        formState: { errors }, 
    } = useForm()

    // Event controller
    const [isPending, setIsPending] = useState(false)
    const [isHidePassword, setIsHidePassword] = useState(true)

    const onSubmit = handleSubmit((data) => {
        const {
            first_name,
            last_name,
            birthday,
            phone,
            email,
            password,
            passwordConfirm
        } = data

        // Check confirm password in progress.

        const user = {
            first_name,
            last_name,
            birthday,
            phone,
            email,
            password,
        }

        setIsPending(true)

        if(password === passwordConfirm) {
            fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }).then((res) => {
                if(res.status === 201) {
                    setIsPending(false)
                    navigate('/login')
                }
            })
        }
    })

    const eventHidePassword = () => {
        setIsHidePassword(!isHidePassword)
    }

    return (
        <div className="Register">
            <div className="flex flex-col max-w-xl mx-auto justify-center">
                <div className="md:border md:border-gray-300 md:shadow-sm rounded p-8 md:my-12">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <div className="font-bold text-2xl">
                                Register
                            </div>
                        </div>

                        <form className="space-y-2" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">First Name</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "first_name",
                                            {
                                                required: true,
                                                minLength: 1,
                                                maxLength: 50,
                                            }
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"  placeholder="Mongsue"/>
                                {
                                    errors.first_name?.type === "required" &&
                                    <div className="text-sm text-red-500">first name is requried</div>
                                }
                                {
                                    errors.first_name?.type === "minLength" || errors.first_name?.type === "maxLength" &&
                                    <div className="text-sm text-red-500">first name is too long</div>
                                }
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">Last Name</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "last_name",
                                            {
                                                required: true,
                                                minLength: 1,
                                                maxLength: 50,
                                            }
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"  placeholder="Muesong"/>
                                {
                                    errors.last_name?.type === "required" &&
                                    <div className="text-sm text-red-500">last name is requried</div>
                                }
                                {
                                    errors.last_name?.type === "minLength" || errors.first_name?.type === "maxLength" &&
                                    <div className="text-sm text-red-500">last name is too long</div>
                                }
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">Birthday: dd/mm/yyyy</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "birthday",
                                            {
                                                required: true,
                                                pattern: /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/
                                            }
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"  placeholder="mm/dd/yyyy"/>
                                {
                                    errors.birthday?.type === "required" &&
                                    <div className="text-sm text-red-500">birthday is requried</div>
                                }
                                {
                                    errors.birthday?.type === "pattern" &&
                                    <div className="text-sm text-red-500">must be mm/dd/yyyy</div>
                                }
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">Phone Number</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "phone",
                                            {
                                                required: true,
                                                pattern: /([0][0-9])\d{8}/,
                                            }
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"  placeholder="0123456789"/>
                                {
                                    errors.phone?.type === "required" &&
                                    <div className="text-sm text-red-500">phone number is requried</div>
                                }
                                {
                                    errors.phone?.type === "pattern" &&
                                    <div className="text-sm text-red-500">wanna xss my website?</div>
                                }
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">Email</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "email",
                                            {
                                                required: true, 
                                                pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                            }
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"  placeholder="mongsue@example.com"/>
                                {
                                    errors.email?.type === "required" &&
                                    <div className="text-sm text-red-500">email is requried</div>
                                }
                                {
                                    errors.email?.type === "pattern" &&
                                    <div className="text-sm text-red-500">wanna xss my website?</div>
                                }
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">Password</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <div className="relative flex justify-end items-center">
                                    <input
                                        {...register(
                                                "password",
                                                {
                                                    required: true,
                                                    minLength: 8,
                                                    pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                                }
                                            )
                                        }
                                    type={isHidePassword? "password":"text"} className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300" />
                                    {isHidePassword?
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute mx-2 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={eventHidePassword}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                        :<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute mx-2 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={eventHidePassword}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    }
                                </div>
                                {
                                    errors.password?.type === "required" &&
                                    <div className="text-sm text-red-500">password is requried</div>
                                }
                                {
                                    errors.password?.type === "minLength" &&
                                    <div className="text-sm text-red-500">password must be at least 8 characters</div>
                                }
                                {
                                    errors.password?.type === "pattern" &&
                                    <div className="text-sm text-red-500">password is too week</div>
                                }
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">Re-enter password</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input
                                    {...register(
                                            "passwordConfirm",
                                            {
                                                required: true,
                                                pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                            }
                                        )
                                    }
                                type={isHidePassword? "password":"text"} className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"/>
                                {
                                    errors.passwordConfirm?.type === "required" &&
                                    <div className="text-sm text-red-500">please confirm your password</div>
                                }
                            </div>
                            
                            {/* Button */}
                            <SubmitButton isPending={isPending} Content={"Register"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register