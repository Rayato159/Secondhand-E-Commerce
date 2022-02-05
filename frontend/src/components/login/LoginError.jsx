import React from 'react';

import { AiOutlineWarning } from 'react-icons/ai'

export const LoginError = () => {
    return (
        <div className='flex items-center space-x-1'>
            <AiOutlineWarning className='text-red-500'/>
            <div className='text-xs text-red-500'>
                Please check your email or password.
            </div>
        </div>
    )
}
