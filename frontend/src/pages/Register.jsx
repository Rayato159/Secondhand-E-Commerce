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
        } catch(e) {
            setIsPending(false)
        }
    }

    useEffect(() => {
        if(localStorage.getItem("accessToken")) {
            navigate('/')
        }
    }, [isToken])
    
    return (
        <div className="w-full py-10">
            <div className="max-w-md mx-auto shadow-xl bg-white px-4 py-10 rounded-xl">
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
                            <div className='flex space-x-2 items-center'>
                                <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="First Name"
                                    {...register("first_name"),  { required: true }}
                                />
                            </div>

                            {/* Last Name */}
                            <div className='flex space-x-2 items-center'>
                                <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Last Name"
                                    {...register("last_name"),  { required: true }}
                                />
                            </div>

                            {/* Phone Number */}
                            <div className='flex space-x-2 items-center'>
                                <AiOutlinePhone className='w-6 h-6' />
                                <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Phone Number"
                                    {...register("phone_number"),  { required: true, pattern: /^[0-9]{0,10}$/ }}
                                />
                            </div>
                            
                            {/* Email */}
                            <div className='flex space-x-2 items-center'>
                                <AiOutlineMail className='w-6 h-6' />
                                <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Email"
                                    {...register("email"),  { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ }}
                                />
                            </div>

                            {/* Password */}
                            <div className='relative flex space-x-2 items-center justify-end'>
                                <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type={isShowPassword? "text": "password"} maxLength={36} placeholder="Password"
                                    {...register("password"),  { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ }}
                                />
                                {isShowPassword?
                                    <AiOutlineEye onClick={() => setIsShowPassword(!isShowPassword)} className='absolute w-6 h-6 cursor-pointer' />
                                    :<AiOutlineEyeInvisible onClick={() => setIsShowPassword(!isShowPassword)} className='absolute w-6 h-6 cursor-pointer' />
                                }
                            </div>

                            {/* Password-Confirm */}
                            <div className='flex space-x-2 items-center'>
                                <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type={isShowPassword? "text": "password"} maxLength={36} placeholder="Password-Confirm"
                                    {...register("password_confirm"),  { required: true }}
                                />
                            </div>

                            {/* Address */}
                            <div className='flex space-x-2 items-center'>
                                <textarea className="w-full bg-gray-100 border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" rows="3" placeholder="Address"
                                    {...register("address"),  { required: true }}
                                />
                            </div>
                        </div>
                        
                        {/* Button */}
                        <div className='pt-6'>
                            <button className="bg-mycolor-300 p-2 rounded-full shadow-md w-full hover:bg-mycolor-200 hover:-translate-y-1 duration-300" type="submit">
                                <div className="font-bold">
                                    สมัครสมาชิก
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
