import React from 'react'

// Components
import { FormLabel } from '../components/FormLabel'

export const Register = () => {
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
                            <div className='flex flex-col space-y-1'>
                                <FormLabel message={'First Name'}/>
                                <input onChange={(e) => console.log(e.target.value)} className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type="text" placeholder='Mongsue' />
                            </div>

                            {/* LastName */}
                            <div className='flex flex-col space-y-1'>
                                <FormLabel message={'Last Name'}/>
                                <input onChange={(e) => console.log(e.target.value)} className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type="text" placeholder='Muesong' />
                            </div>

                            {/* Phone */}
                            <div className='flex flex-col space-y-1'>
                                <FormLabel message={'Phone Number'}/>
                                <input onChange={(e) => console.log(e.target.value)} className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type="text" placeholder='0123456789' />
                            </div>
                            
                            {/* Email */}
                            <div className='flex flex-col space-y-1'>
                                <FormLabel message={'Email'}/>
                                <input onChange={(e) => console.log(e.target.value)} className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type="text" placeholder='mongsue@example.com' />
                            </div>

                            {/* Password */}
                            <div className='flex flex-col space-y-1'>
                                <FormLabel message={'Password'}/>
                                <input onChange={(e) => console.log(e.target.value)} className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type="password" />
                            </div>

                            {/* Confirm-Password */}
                            <div className='flex flex-col space-y-1'>
                                <FormLabel message={'Confirm Your Password'}/>
                                <input onChange={(e) => console.log(e.target.value)} className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type="password" />
                            </div>


                        </form>
                    </div>

                    {/* Submit-Button */}
                    <div className='flex w-full'>
                        <button className='w-full px-4 py-2 bg-mycolor-600 hover:bg-mycolor-500'>
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