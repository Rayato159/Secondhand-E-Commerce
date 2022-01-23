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
                                <div className="flex items-center">
                                    <input onChange={(e) => setPassword(e.target.value)} className='w-full h-8 border-b-2 border-mycolor-600 bg-neutral-200 md:py-1 px-2 focus:outline-none duration-300 text-sm' type={isShowPassword? "text":"password"} />
                                    {isShowPassword?
                                        <svg onClick={() => setIsShowPassword(!isShowPassword)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto p-1 bg-mycolor-600 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>:
                                        <svg onClick={() => setIsShowPassword(!isShowPassword)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto p-1 bg-mycolor-600 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    }
                                </div>
                            </div>

                            {/* Confirm-Password */}
                            <div className='flex flex-col space-y-1'>
                                <FormLabel message={'Password-Confirm'}/>
                                <input onChange={(e) => setPasswordConfirm(e.target.value)} className='w-full h-8 border-b-2 border-mycolor-600 bg-neutral-200 md:py-1 px-2 focus:outline-none duration-300 text-sm' type={isShowPassword? "text":"password"} />
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