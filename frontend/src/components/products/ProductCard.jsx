import React from 'react'

// Routes
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({ product }) => {

    // Router
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`${product.product_id}`)} className='max-w-4xl md:mx-auto bg-white shadow-md p-3 border border-gray-200 my-4 mx-3 cursor-pointer'>
            <div className='flex items-center md:justify-between'>

                {/* Left */}
                <div className='flex space-x-4 items-center'>
                    <div>
                        <img className='md:h-24 md:w-36 h-20 w-32 object-cover border border-gray-200' src={product.product_photos[0].path} />
                    </div>
                    <div className='hidden md:flex flex-col space-y-2'>
                        <div className='md:text-xl text-md truncate'>
                            {product.title}
                        </div>
                        <div className='text-sm max-w-md truncate'>
                            {product.description}
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div>

                {/* Desktop */}
                <div className='hidden md:flex space-x-2 items-center mr-6'>
                    <div className='font-bold md:text-xl text-md'>
                        {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                    <div className='md:text-xl text-md'>
                        ฿
                    </div>
                </div>

                {/* Mobile */}
                <div className='ml-6 md:hidden flex flex-col space-y-2 overflow-hidden'>
                    <div className='flex flex-col space-y-2 truncate'>
                        <div className='text-md'>
                            {product.title}
                        </div>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div className='font-bold text-md'>
                            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className='text-md'>
                            ฿
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}
