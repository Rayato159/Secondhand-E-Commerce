import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { loginLoading, loginSuccess, loginFail } from  '../features/loginSlice'

// Services
import { signin } from '../services/loginService'

// Components
import { FormLabel } from '../components/FormLabel'
import { FormInput } from '../components/FormInput'

export const Login = () => {

    // Navigate
    const navigate = useNavigate()

    // Show and Hide Password Toggle
    const [isShowPassword, setIsShowPassword] = useState(false)

    // Import from store
    const { isAuth, isLoginLoading, isLoginErrors }= useSelector((state) => state.login)
    const dispatch = useDispatch()

    // State
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [failCount, setFailCount] = useState(2)

    // Submit function
    const onSubmitHandle = async (e) => {
        e.preventDefault()

        dispatch(loginLoading())
        try {
            const res = await signin(email, password)
            dispatch(loginSuccess())
        } catch(e) {
            dispatch(loginFail(e.message))
            setFailCount(failCount-1)

            if(failCount === 0) {
                setFailCount(2)
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            } 
        }
    }

    useEffect(() => {
        if(isAuth) {
            navigate('/')
        }
    }, [isAuth])

    return (
        <div className='md:my-4 my-2'>
            <div className='flex h-full justify-center items-center'>
                <div className="flex shadow-lg lg:w-1/3">
                    {/* Banner */}
                    <div className='hidden md:flex bg-mycolor-600 w-52 p-4'>
                        <div className="flex flex-col justify-center h-full space-y-3">
                            <div className='flex justify-center font-bold text-white text-3xl italic'>
                                Mongsue
                            </div>
                            <div className='flex justify-center text-center text-sm text-white'>
                                Secondhand Online
                            </div>
                        </div>
                    </div>

                    {/* Login-Form */}
                    <form onSubmit={onSubmitHandle} className='flex flex-col space-y-4 bg-white p-6 w-full'>

                        {/* Header */}
                        <div className='font-bold text-center'>
                            เข้าสู่ระบบ
                        </div>

                        <div className='flex flex-col space-y-2'>
                            {/* Email */}
                            <FormInput event={(value) => setEmail(value)} label={'Phone Number'} placeholder={'mongsue@example.com'}/>

                            {/* Password */}
                            <div>
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
                        </div>

                        {isLoginErrors.length > 0 &&
                            <div className='bg-red-300 border border-red-500 p-2'>
                                {isLoginErrors.map((e, i) => {
                                    return (
                                        <div key={i} className='text-sm text-red-500'>
                                            * {e}
                                        </div>
                                    )
                                })}
                            </div>
                        }

                        {/* Button */}
                        <div className='flex justify-center py-4'>
                            {isLoginLoading?
                                <button className='flex justify-center space-x-2 bg-mycolor-500 text-white py-1 px-2 w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 items-center animate-spin" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                    <div className='font-bold'>
                                        กำลังเข้าสู่ระบบ...
                                    </div>
                                </button>:
                                <button className='bg-mycolor-600 hover:bg-mycolor-500 text-white py-1 px-2 font-bold w-full'>
                                    เข้าสู่ระบบ
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
