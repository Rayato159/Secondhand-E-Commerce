import React, { useState } from 'react'

// Icons
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

export const Register = () => {

    // Hook state
    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
    <div className="w-full py-10">
        <div className="max-w-md mx-auto shadow-xl bg-white px-4 py-10 rounded-xl">
            <div className="flex justify-center">
                {/* Register forms */}
                <form className="w-72 flex flex-col space-y-6">

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
                            <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="First Name"/>
                        </div>

                        {/* Last Name */}
                        <div className='flex space-x-2 items-center'>
                            <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Last Name"/>
                        </div>

                        {/* Address */}
                        <div className='flex space-x-2 items-center'>
                            <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Address"/>
                        </div>

                        {/* Phone Number */}
                        <div className='flex space-x-2 items-center'>
                            <AiOutlinePhone className='w-6 h-6' />
                            <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Phone Number"/>
                        </div>
                        
                        {/* Email */}
                        <div className='flex space-x-2 items-center'>
                            <AiOutlineMail className='w-6 h-6' />
                            <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Email"/>
                        </div>

                        {/* Password */}
                        <div className='relative flex space-x-2 items-center justify-end'>
                            <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type={isShowPassword? "text": "password"} maxLength={36} placeholder="Password"/>
                            <AiOutlineEyeInvisible onClick={() => setIsShowPassword(!isShowPassword)} className='absolute w-6 h-6 cursor-pointer' />
                        </div>

                        {/* Password-Confirm */}
                        <div className='flex space-x-2 items-center'>
                            <input className="w-full border-b-2 border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type={isShowPassword? "text": "password"} maxLength={36} placeholder="Password-Confirm"/>
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
