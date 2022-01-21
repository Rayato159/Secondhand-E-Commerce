import React from 'react'

// Components
import { FormLabel } from '../components/FormLabel'

export const Login = () => {
  return (
    <div>
        <div className='flex justify-center my-10'>
            <div className="flex shadow-lg">
                {/* Banner */}
                <div className='bg-mycolor-600 w-56 p-6'>
                    <div className="flex flex-col justify-center h-full space-y-3">
                        <div className='flex justify-center font-bold text-white text-4xl italic'>
                            Mongsue
                        </div>
                        <div className='flex justify-center text-center text-xs text-white'>
                            มองสือที่แปลว่ามือสอง แฮร่
                        </div>
                    </div>
                </div>

                {/* Login-Form */}
                <form className='flex flex-col space-y-4 bg-white p-6'>

                    {/* Header */}
                    <div className='font-bold text-center'>
                        เข้าสู่ระบบ
                    </div>

                    <div className='flex flex-col space-y-1'>
                        {/* Email */}
                        <div>
                            <FormLabel message={'Email'}/>
                            <input className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 py-1 px-2' type="text" placeholder='mongsue@example.com' />
                        </div>

                        {/* Password */}
                        <div>
                            <FormLabel message={'Password'}/>
                            <input className='w-full border-b-2 border-mycolor-600 bg-mycolor-200' type="password" />
                        </div>
                    </div>

                    {/* Button */}
                    <div className='flex justify-center py-4'>
                        <button className='bg-mycolor-600 text-white py-1 px-2 w-full'>
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
