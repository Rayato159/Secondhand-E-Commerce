import React, { useState, useEffect } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="md:max-w-md mx-auto md:border md:border-gray-300 md:shadow-sm rounded p-10 md:my-12">
            <div className="flex flex-col justify-center">

                <div className="font-bold text-2xl text-center">
                        Login
                </div>

                <form action="" className="space-y-2">

                    <div>
                        <label htmlFor="" className="text-sm font-bold">Email</label>
                        <input type="text" className="w-full border border-gray-300 rounded p-2 mt-1" />
                    </div>

                    <div>
                        <label htmlFor="" className="text-sm font-bold">Password</label>
                        <input type="password" className="w-full border border-gray-300 rounded p-2 mt-1" />
                    </div>

                    <div>
                        <button className="w-full bg-amber-500 hover:bg-amber-400 text-amber-800 rounded p-2 mt-6 md-3">Submit</button>
                    </div>
                
                </form>
            </div>
        </div>
    )
}

export default Login
