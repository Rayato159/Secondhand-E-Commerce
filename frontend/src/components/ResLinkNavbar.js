import React from 'react'
import { Link } from 'react-router-dom' 

export const ResLinkNavbar = ({ message, path }) => {
  return (
    <div>
        <Link to={path} className='block w-full text-sm text-center hover:bg-mycolor-100 p-4'>
            {message}
        </Link>
    </div>
  )
}
