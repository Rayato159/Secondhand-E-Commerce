import React, { useState } from 'react';

import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'

export const PasswordInput = ({ props }) => {

    // Hook state
    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
        <div className="flex space-x-1 items-center justify-end">
            {isShowPassword?
                <AiOutlineEye onClick={() => setIsShowPassword(!isShowPassword)} className="w-6 h-6 cursor-pointer"/>
                :<AiOutlineEyeInvisible onClick={() => setIsShowPassword(!isShowPassword)} className="w-6 h-6 cursor-pointer" />
            }
            <input onChange={(e) => props(e.target.value)} className="border-b-2 border-mycolor-500 py-1 px-2 w-full focus:outline-none focus:border-black" type={isShowPassword? "text": "password"} placeholder="Password"/>
        </div>
    )
}
