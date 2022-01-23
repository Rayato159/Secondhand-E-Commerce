import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import { FormLabel } from '../components/FormLabel'
import { FormInput } from '../components/FormInput'

// Redux
import { useSelector } from 'react-redux'

// Services
import { signup } from '../services/userService'

export const Register = () => {

    const navigate = useNavigate()

    // Check if user are logged in
    const { isAuth } = useSelector((state) => state.login)

    const [registerDetails, setRegisterDetails] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    const [isRegisterLoading, setIsRegisterLoading] = useState(false)
    const [isRegisterErrors, setIsRegisterErrors] = useState([])
    const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)

    // Hide and Show Password Event
    const [isShowPassword, setIsShowPassword] = useState(false)

    const onSubmitHandle = async (e) => {
        e.preventDefault()

        setIsRegisterLoading(true)
        try {
            const res = await signup(registerDetails)
            setIsRegisterErrors([])
            setIsRegisterSuccess(true)
            setIsRegisterLoading(false)
        } catch(e) {
            setIsRegisterLoading(false)
            setIsRegisterErrors(e.message)
        }
    }

    useEffect(() => {
        if(isRegisterSuccess) {
            navigate('/login')
        }

        if(isAuth) {
            navigate('/')
        }
    }, [isRegisterSuccess, isAuth])

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
                        <form onSubmit={onSubmitHandle} className='flex flex-col space-y-2'>
                            {/* FirstName */}
                            <FormInput event={(value) => setRegisterDetails({...registerDetails, first_name: value})} label={'First Name'} placeholder={'Mongsue'}/>

                            {/* LastName */}
                            <FormInput event={(value) => setRegisterDetails({...registerDetails, last_name: value})} label={'Last Name'} placeholder={'Muesong'}/>

                            {/* Phone */}
                            <FormInput event={(value) => setRegisterDetails({...registerDetails, phone: value})} label={'Phone Number'} placeholder={'0123456789'}/>
                            
                            {/* Email */}
                            <FormInput event={(value) => setRegisterDetails({...registerDetails, email: value})} label={'Email'} placeholder={'mongsue@example.com'}/>

                            {/* Password */}
                            <div className='flex flex-col space-y-1'>
                                <FormLabel message={'Password'}/>
                                <div className="flex items-center">
                                    <input onChange={(e) => setRegisterDetails({...registerDetails, password: e.target.value})} className='w-full h-8 border-b-2 border-mycolor-600 bg-neutral-200 md:py-1 px-2 focus:outline-none duration-300 text-sm' type={isShowPassword? "text":"password"} />
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
                                <input onChange={(e) => setRegisterDetails({...registerDetails, passwordConfirm: e.target.value})} className='w-full h-8 border-b-2 border-mycolor-600 bg-neutral-200 md:py-1 px-2 focus:outline-none duration-300 text-sm' type={isShowPassword? "text":"password"} />
                            </div>

                            {/* Errors */}
                            {isRegisterErrors.length > 0?
                                <div className='pt-7'>
                                    <div className='w-full bg-red-300 border border-red-500 p-2'>
                                        {isRegisterErrors.map((e, i) => {
                                            return (
                                                <div key={i} className='text-sm text-red-500'>
                                                    * {e}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>:null
                            }

                            {/* Submit-Button */}
                            <div className='pt-7'>
                                {isRegisterLoading?
                                    <button className='flex justify-center space-x-2 bg-mycolor-500 text-white py-1 px-2 w-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 items-center animate-spin" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                        </svg>
                                        <div className='font-bold'>
                                            กำลังดำเนินการ...
                                        </div>
                                    </button>:
                                    <button type='submit' className='bg-mycolor-600 hover:bg-mycolor-500 text-white py-1 px-2 font-bold w-full'>
                                        สมัครสมาชิก
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}