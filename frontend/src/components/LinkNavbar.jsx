import React from 'react'
import { Link } from 'react-router-dom'

export const LinkNavbar = ({ message, path }) => {
  return (
    <div>
        <Link to={path} className='text-sm hover:text-gray-500'>
            {message}
        </Link>
    </div>
  )
}
