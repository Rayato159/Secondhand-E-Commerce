import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ image, message, link }) => {
  return (
    <Link to={link} className='flex flex-col p-1 items-center transform hover:bg-gray-300 hover:scale-110 duration-300'>
        <div>
            <img className='w-auto h-20 p-3' src={image}/>
        </div>
        <div className='text-sm text-center'>
            {message}
        </div>
    </Link>
  )
}