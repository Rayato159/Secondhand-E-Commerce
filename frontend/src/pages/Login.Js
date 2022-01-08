import React, { useState, useEffect } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="flex flex-col mx-auto max-w-md justify-center">
            <div className="md:border md:border-gray-300 md:shadow-sm rounded p-8 md:my-12">
                <div className="flex flex-col justify-center">

                    <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <div className="font-bold text-2xl text-center">
                            Login
                        </div>
                    </div>

                    <form action="" className="space-y-2">

                        <div>
                            <label htmlFor="" className="text-sm font-bold">Email</label>
                            <input name="email" type="text" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300" />
                        </div>

                        <div>
                            <label htmlFor="" className="text-sm font-bold">Password</label>
                            <input name="password" type="password" className="w-full border border-gray-300 rounded p-2 mt-1 focus:border-slate-300 focus:ring-slate-300" />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 rounded focus:border-slate-300 focus:ring-1 focus:ring-slate-300" />
                                <label htmlFor="" className="ml-2 text-sm">Remember me</label>
                            </div>
                        </div>

                        <div>
                            <button className="w-full bg-amber-500 hover:bg-amber-400 text-amber-800 rounded p-2 my-3">Login</button>
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
