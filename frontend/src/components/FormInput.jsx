import React from 'react'

// Components
import { FormLabel } from './FormLabel'

export const FormInput = ({ label, placeholder, event }) => {

    return (
        <div className='flex flex-col space-y-1'>
            <FormLabel message={label}/>
            <input onChange={(e) => event(e.target.value)} className='w-full border-b-2 border-mycolor-600 bg-mycolor-200 md:py-1 px-2 focus:outline-none focus:bg-neutral-100 duration-300 text-sm' type='text' placeholder={placeholder} />
        </div>
    )
}
