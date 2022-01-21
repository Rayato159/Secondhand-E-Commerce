import React, { useState } from 'react'

// Components
import { FormLabel } from '../components/FormLabel'

export const Login = () => {

    const [isError, setIsError] = useState([
        'Username mustn\'t be empty',
        'Password mustn\'t be empty'
    ])

    return (
        <div className='my-4'>
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
                    <form className='flex flex-col space-y-4 bg-white p-6 w-full'>

                        {/* Header */}
                        <div className='font-bold text-center'>
                            เข้าสู่ระบบ
                        </div>

                        <div className='flex flex-col space-y-1'>
                            {/* Email */}
                            <div>
                                <FormLabel message={'Email'}/>
                                <input className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type="text" placeholder='mongsue@example.com' />
                            </div>

                            {/* Password */}
                            <div>
                                <FormLabel message={'Password'}/>
                                <input className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type="password" />
                            </div>
                        </div>

                        {isError.length > 0 &&
                            <div className='bg-red-300 border border-red-500 p-2'>
                                {isError.map((e, i) => {
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
                            <button className='bg-mycolor-600 hover:bg-mycolor-500 text-white py-1 px-2 w-full'>
                                เข้าสู่ระบบ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
