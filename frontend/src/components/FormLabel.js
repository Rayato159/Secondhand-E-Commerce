import React from 'react'

export const FormLabel = ({ message }) => {
  return (
    <div className='flex space-x-1'>
        <label>{message}</label>
        <label className='text-red-500'>*</label>
    </div>
  )
}
