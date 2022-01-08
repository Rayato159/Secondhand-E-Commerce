import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

import './Login.css'

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

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
                                <label htmlFor="" className="flex">
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
                                <label htmlFor="" className="flex">
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
                                <label htmlFor="" className="flex">
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
                                <label htmlFor="" className="flex">
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
                                <label htmlFor="" className="flex">
                                    <div className="font-bold text-md">Password</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "password",
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300" />
                            </div>

                            <div>
                                <label htmlFor="" className="flex">
                                    <div className="font-bold text-md">Re-enter password</div>
                                    <div className="text-sm text-red-500 ml-1">*</div>
                                </label>
                                <input 
                                    {...register(
                                            "reEnterPassword",
                                        )
                                    }
                                type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300"/>
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
