import React from 'react'

// Components
import { FormLabel } from './FormLabel'

export const FormInput = ({ label, placeholder, event }) => {

    return (
        <div className='flex flex-col space-y-1'>
            <FormLabel message={label}/>
            <input onChange={(e) => event(e.target.value)} className='w-full h-8 border-b-2 border-mycolor-600 bg-neutral-200 md:py-1 px-2 focus:outline-none duration-300 text-sm' type='text' placeholder={placeholder} />
        </div>
    )
}
