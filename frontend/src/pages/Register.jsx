import React, { useState } from 'react'

// Components
import { FormLabel } from '../components/FormLabel'
import { FormInput } from '../components/FormInput'

export const Register = () => {

    const [firstName, setFirstName] = useState("")
    const [lasttName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    // Hide and Show Password Event
    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
        <div>
            <div className="max-w-md mx-auto">
                <div className="flex flex-col space-y-7 items-center bg-white my-8 mx-4 shadow-xl p-6">
                    {/* Header */}
                    <div className='w-full'>
                        <div className='flex justify-center items-center space-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            <div className='font-bold text-xl'>
                                สมัครสมาชิก
                            </div>
                        </div>
                    </div>

                    {/* Register Form */}
                    <div className='w-full'>
                        <form className='flex flex-col space-y-2'>
                            {/* FirstName */}
                            <FormInput event={(value) => setFirstName(value)} label={'First Name'} placeholder={'Mongsue'}/>

                            {/* LastName */}
                            <FormInput event={(value) => setLastName(value)} label={'Last Name'} placeholder={'Muesong'}/>

                            {/* Phone */}
                            <FormInput event={(value) => setPhoneNumber(value)} label={'Phone Number'} placeholder={'0123456789'}/>
                            
                            {/* Email */}
                            <FormInput event={(value) => setEmail(value)} label={'Phone Number'} placeholder={'mongsue@example.com'}/>

                            {/* Password */}
                            <div className='flex flex-col space-y-1'>
                                <FormLabel message={'Password'}/>
                                <input onChange={(e) => setPassword(e.target.value)} className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type="password" />
                            </div>

                            {/* Confirm-Password */}
                            <div className='flex flex-col space-y-1'>
                                <FormLabel message={'Password-Confirm'}/>
                                <input onChange={(e) => setPasswordConfirm(e.target.value)} className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type="password" />
                            </div>


                        </form>
                    </div>

                    {/* Submit-Button */}
                    <div className='w-full py-3'>
                        <button type='submit' className='w-full items-center px-4 py-2 bg-mycolor-600 hover:bg-mycolor-500'>
                            <div className='font-bold text-white'>
                                ยืนยันการสมัครสมาชิก
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}