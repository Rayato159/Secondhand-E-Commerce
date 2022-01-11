import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import './Login.css'

const Login = () => {

    // React Hook

    const [isPending, setIsPending] = useState(false)
    const [isFinish, setIsFinish] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        const {
            email,
        } = data

        console.log(email)
        setIsPending(true)

        setTimeout(() => {
            setIsPending(false)
            setIsFinish(true)
        }, 2000)
    })

    return (
        <div className="Login">
            <div className="flex flex-col max-w-md mx-auto justify-center">
                <div className="md:border md:border-gray-300 md:shadow-sm rounded p-8 md:my-12">
                    <div className="flex flex-col justify-center">

                        <div className="flex items-center mb-6">
                            <div className="font-bold text-xl">
                                We will send the request to your email
                            </div>
                        </div>

                        <form className="space-y-2" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="" className="flex text-sm font-bold items-center">
                                    <div className="font-bold">Your Email</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <div className="relative flex items-center justify-end">
                                    <input 
                                        {...register(
                                                "email", 
                                                { 
                                                    required: true,
                                                    pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                                }
                                            )
                                        }
                                    type="text" className="relative w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300 items-center" />
                                </div>
                                {
                                    errors.email?.type === "required" &&
                                    <div className="text-sm text-red-500">Email is required.</div>
                                }
                                {
                                    errors.email?.type === "pattern" &&
                                    <div className="text-sm text-red-500">Never gonna give you up</div>
                                }
                            </div>

                            {isPending?
                                <div>
                                    <button disabled className="flex relative w-full bg-amber-400 text-amber-800 rounded p-2 mt-6 justify-center">
                                        <div className="flex space-x-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute animate-spin h-5 w-5 items-center" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                            </svg>
                                            <div className="font-bold">
                                                Processing...
                                            </div>
                                        </div>        
                                    </button>
                                </div>:
                                <div>
                                    <button className="flex relative justify-center w-full bg-amber-500 hover:bg-amber-400 text-amber-800 rounded p-2 mt-6 font-bold">
                                        {isFinish? "Re-send":"Send"}
                                    </button>
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login