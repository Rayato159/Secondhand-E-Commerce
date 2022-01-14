import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

import './Login.css'

// Components
import SubmitButton from '../components/SubmitButton';
import FormLabel from '../components/FormLabel';
import ErrorTag from '../components/ErrorTag';

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
                                <FormLabel label={"First Name"} />
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
                                    <ErrorTag message={"first name is requried"} />
                                }
                                {
                                    errors.first_name?.type === "minLength" || errors.first_name?.type === "maxLength" &&
                                    <ErrorTag message={"first name is too long"} />
                                }
                            </div>

                            <div>
                                <FormLabel label={"Last Name"} />
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
                                    <ErrorTag message={"last name is requried"} />
                                }
                                {
                                    errors.last_name?.type === "minLength" || errors.first_name?.type === "maxLength" &&
                                    <ErrorTag message={"last name is too long"} />
                                }
                            </div>

                            <div>
                                <FormLabel label={"Birthday: dd/mm/yyyy"} />
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
                                    <ErrorTag message={"birthday is requried"} />
                                }
                                {
                                    errors.birthday?.type === "pattern" &&
                                    <ErrorTag message={"must be mm/dd/yyyy"} />
                                }
                            </div>

                            <div>
                                <FormLabel label={"Phone Number"} />
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
                                    <ErrorTag message={"phone number is requried"} />
                                }
                                {
                                    errors.phone?.type === "pattern" &&
                                    <ErrorTag message={"wanna xss my website?"} />
                                }
                            </div>

                            <div>
                                <FormLabel label={"Email"} />
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
                                    <ErrorTag message={"email is requried"} />
                                }
                                {
                                    errors.email?.type === "pattern" &&
                                    <ErrorTag message={"wanna xss my website?"} />
                                }
                            </div>

                            <div>
                                <FormLabel label={"Password"} />
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
                                    <ErrorTag message={"password is requried"} />
                                }
                                {
                                    errors.password?.type === "minLength" &&
                                    <ErrorTag message={"password must be at least 8 characters"} />
                                }
                                {
                                    errors.password?.type === "pattern" &&
                                    <ErrorTag message={"password is too week"} />
                                }
                            </div>

                            <div>
                                <FormLabel label={"Re-Enter Password"} />
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
                                    <ErrorTag message={"please confirm your password"} />
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
