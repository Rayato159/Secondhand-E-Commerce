import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Styles
import './Form.css'

// React hook forms
import { useForm } from "react-hook-form";

// Icons
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'
import { ImSpinner8 } from 'react-icons/im'

// Redux
import { useSelector } from 'react-redux'

// Services
import { registerNewUser } from '../services/userServices'

export const Register = () => {

    // Navigate
    const navigate = useNavigate()

    // Redux state
    const { isToken } = useSelector((state) => state.login)

    // Hook state
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState("")

    // React hook forms
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        setIsPending(true)
        try {
            const res = await registerNewUser(data)
            setIsPending(false)
            navigate('/login')
        } catch(e) {
            setIsPending(false)
            setError(e.message)
        }
    }

    useEffect(() => {
        if(localStorage.getItem("accessToken")) {
            navigate('/')
        }
    }, [isToken])
    
    return (
        <div className="w-full py-10">
            <div className="max-w-md mx-auto shadow-xl bg-white border border-gray-200 px-4 py-10 md:rounded-xl">
                <div className="flex justify-center">
                    {/* Register forms */}
                    <form onSubmit={handleSubmit(onSubmit)} className="w-72 flex flex-col space-y-6">

                        {/* Header */}
                        <div className='flex space-x-2 items-center'>
                            <div>
                                <AiOutlineUserAdd className='h-7 w-7' />
                            </div>
                            <div className='text-2xl font-bold'>
                                สมัครสมาชิก
                            </div>
                        </div>

                        {/* Form */}
                        <div className='w-full flex flex-col space-y-4'>
                            {/* First Name */}
                            <div className='flex flex-col space-y-1'>
                                <input className="items-center w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="First Name"
                                    {...register("first_name", { required: true })}
                                />
                                {errors.first_name?.type === 'required' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            First name is required.
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Last Name */}
                            <div className='flex flex-col space-y-1'>
                                <input className="items-center w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Last Name"
                                    {...register("last_name", { required: true })}
                                />
                                {errors.last_name?.type === 'required' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Last name is required.
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Phone Number */}
                            <div className='flex flex-col space-y-1'>
                                <div className='flex space-x-2 items-center'>
                                    <AiOutlinePhone className='w-6 h-6' />
                                    <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Phone Number"
                                        {...register("phone_number", { required: true, pattern: /^[0-9]{0,10}$/ })}
                                    />
                                </div>
                                {errors.phone_number?.type === 'required' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Phone number is required.
                                        </div>
                                    </div>
                                }
                                {errors.phone_number?.type === 'pattern' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Please enter a phone number.
                                        </div>
                                    </div>
                                }
                            </div>
                            
                            {/* Email */}
                            <div className='flex flex-col space-y-1'>
                                <div className='flex space-x-2 items-center'>
                                    <AiOutlineMail className='w-6 h-6' />
                                    <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Email"
                                        {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ })}
                                    />
                                </div>
                                {errors.email?.type === 'required' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Email is required.
                                        </div>
                                    </div>
                                }
                                {errors.email?.type === 'pattern' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Please enter an email.
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Password */}
                            <div className='flex flex-col space-y-1'>
                                <div className='relative flex space-x-2 items-center justify-end'>
                                    <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type={isShowPassword? "text": "password"} maxLength={36} placeholder="Password"
                                        {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })}
                                    />
                                    {isShowPassword?
                                        <AiOutlineEye onClick={() => setIsShowPassword(!isShowPassword)} className='absolute w-6 h-6 cursor-pointer' />
                                        :<AiOutlineEyeInvisible onClick={() => setIsShowPassword(!isShowPassword)} className='absolute w-6 h-6 cursor-pointer' />
                                    }
                                </div>
                                {errors.password?.type === 'required' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Password is required.
                                        </div>
                                    </div>
                                }
                                {errors.password?.type === 'pattern' &&
                                    <div className='flex text-xs text-red-500 space-x-2'>
                                        <BiErrorCircle className='w-5 h-5' />
                                        <div>
                                            Minimum eight characters, at least one letter, one number and one special character.
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Password-Confirm */}
                            <div className='flex flex-col space-y-1'>
                                <input className="items-center w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type={isShowPassword? "text": "password"} maxLength={36} placeholder="Password-Confirm"
                                    {...register("password_confirm", { required: true })}
                                />
                                {errors.password_confirm?.type === 'required' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Password-confirm is required.
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Address */}
                            <div className='flex flex-col space-y-1'>
                                <textarea className="items-center w-full bg-gray-100 border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" rows="3" placeholder="Address"
                                    {...register("address", { required: true })}
                                />
                                {errors.address?.type === 'required' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Address is required.
                                        </div>
                                    </div>
                                }
                            </div>
                            {error && 
                                <div className='flex space-x-2 text-xs text-red-500 items-center'>
                                    <div>
                                        <BiErrorCircle />
                                    </div>
                                    <div>
                                        {error}
                                    </div>
                                </div>
                            }
                        </div>
                        
                        {/* Button */}
                        <div className='pt-6'>
                            {isPending?
                                <button disabled className="flex space-x-3 justify-center p-2 rounded-full shadow-md w-full disabled:bg-mycolor-200 disabled:text-gray-400" type="submit">
                                    <ImSpinner8 className='w-6 h-6 animate-spin text-gray-400'/>
                                    <div className="font-bold">
                                        กำลังดำเนินการ...
                                    </div>
                                </button>:
                                <button className="bg-mycolor-300 p-2 rounded-full shadow-md w-full hover:bg-mycolor-200 hover:-translate-y-1 duration-300" type="submit">
                                    <div className="font-bold">
                                        สมัครสมาชิก
                                    </div>
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
