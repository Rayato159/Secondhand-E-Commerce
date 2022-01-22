import React from 'react';

export const Searchbox = ({ onSumbitHandle, onChangeHandle }) => {
  return (
    <form onSubmit={(e) => onSumbitHandle(e)} className='flex justify-center'>
        <input onChange={(e) => onChangeHandle(e.target.value)} className='px-2 py-1 w-72 focus:outline-none' type="text" placeholder='กำลังมองหาอะไรอยู่...'/>
        <button type="submit" className='bg-mycolor-400 hover:bg-mycolor-500'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </form>
  )
}
