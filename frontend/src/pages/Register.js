import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

import './Login.css'

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [isHidePassword, setIsHidePassword] = useState(true)

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    const eventHidePassword = () => {
        setIsHidePassword(!isHidePassword)
    }

    return (
        <div className="Register">
            <div className="flex flex-col max-w-xl mx-auto justify-center">
                <div className="md:border md:border-gray-300 md:shadow-sm rounded p-8 md:my-12">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <div className="font-bold text-2xl">
                                สมัครสมาชิกใหม่
                            </div>
                        </div>

                        <form className="space-y-2" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">ชื่อ (ไม่ต้องมีคำนำหน้า)</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "first_name",
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"  placeholder="สมชาย"/>
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">นามสกุล</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "last_name",
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"  placeholder="มุ่งมั่น"/>
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">เบอร์โทร</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "phone",
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"  placeholder="0123456789"/>
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">Email</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "email",
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"  placeholder="mongsue@example.com"/>
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">Password</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <div className="relative flex justify-end items-center">
                                    <input 
                                        {...register(
                                                "password",
                                            )
                                        }
                                    type={isHidePassword? "password":"text"} className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300" />
                                    {isHidePassword?
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute mx-2 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={eventHidePassword}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                        :<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute mx-2 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={eventHidePassword}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    }
                                </div>
                            </div>

                            <div>
                                <label htmlFor="" className="flex items-center">
                                    <div className="font-bold text-md">Re-enter password</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "reEnterPassword",
                                        )
                                    }
                                type={isHidePassword? "password":"text"} className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"/>
                            </div>

                            <div>
                                <button className="w-full bg-amber-500 hover:bg-amber-400 text-amber-800 rounded p-2 mt-6">สมัครสมาชิก</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
