import React, { useEffect, useState } from 'react'

// Icons
import { AiOutlineTags } from 'react-icons/ai'

// Params
import { useParams } from 'react-router-dom'

// Services
import { getProductById } from '../services/productServices'

export const ProductOne = () => {

    let params = useParams()

    // Hooks State
    const [productId, setProductId] = useState(params.product_id)
    const [product, setProduct] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const fetchProduct = async () => {
        setIsPending(true)
        try {
            const res = await getProductById(productId)
            setProduct(res)
            setIsPending(false)
        } catch(e) {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            setIsPending(false)
        }
    }

    useEffect(() => {
        fetchProduct(productId)
    }, [])

    return (
        <div>
            {/* Desktop */}
            <div className='hidden md:block my-6 mx-4'>
                {product &&
                    <div className='max-w-5xl mx-auto shadow-lg border border-gray-200 md:p-6 p-4'>
                        <div className='flex justify-between'>
                            <div className='flex justify-center items-center'>
                                <div className='flex flex-col space-y-3 md:w-96 md:h-72'>
                                    <img className='md:w-96 md:h-72 w-40 object-cover' src={product.photos[0].path} />
                                </div>
                            </div>

                            <div className='flex w-full'>
                                <div className='flex flex-col space-y-4 w-full ml-16 justify-between'>
                                    <div className='flex space-x-6'>
                                        <div className='flex space-x-2'>
                                            <div className='flex space-x-2 items-center'>
                                                <AiOutlineTags className='w-6 h-6'/>
                                            </div>
                                            <div className='font-bold text-2xl'>
                                                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            </div>
                                            <div className='text-2xl'>
                                                ฿
                                            </div>
                                        </div>
                                        <div>
                                            <div className='animate-pulse'>
                                                <div className='bg-amber-500 rounded-md w-20 p-1 text-center'>
                                                    {product.status}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col space-y-1'>
                                        <div className='flex space-x-2'>
                                            <div className='font-bold'>
                                                ผู้ขาย:
                                            </div>
                                            <div>
                                                {product.userDetails.first_name} {product.userDetails.last_name}
                                            </div>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <div className='font-bold'>
                                                Tel:
                                            </div>
                                            <div>
                                                {product.userDetails.phone_number}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='font-bold text-xl'>
                                        {product.title}
                                    </div>

                                    <div>
                                        {product.description}
                                    </div>

                                    <div className='flex space-x-4'>
                                        <button className='py-1 px-4 border border-black bg-amber-300 hover:bg-amber-400'>
                                            <div className='text-xl'>
                                                ซื้อเลย
                                            </div>
                                        </button>
                                        <button className='py-1 px-4 border border-black bg-gray-300 hover:bg-gray-400'>
                                            <div className='text-xl'>
                                                หยิบใส่ตระกร้า
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {/* Mobile */}
            <div className='md:hidden block my-6 mx-4'>
                {product &&
                    <div className='max-w-5xl mx-auto shadow-lg border border-gray-200 p-4'>
                        <div className='flex flex-col space-y-4'>
                            <div className='font-bold text-xl'>
                                {product.title}
                            </div>

                            <div className='flex justify-start items-center'>
                                <div className='flex flex-col space-y-3'>
                                    <img className='w-full object-cover' src={product.photos[0].path} />
                                </div>
                            </div>

                            <div>
                                <div className='flex space-x-6'>
                                    <div className='flex space-x-1'>
                                        <div className='flex space-x-2 items-center'>
                                            <AiOutlineTags className='w-6 h-6'/>
                                        </div>
                                        <div className='font-bold text-2xl'>
                                            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </div>
                                        <div className='text-2xl'>
                                            ฿
                                        </div>
                                    </div>
                                    <div>
                                        <div className='animate-pulse'>
                                            <div className='bg-amber-500 rounded-md w-20 p-1 text-center'>
                                                {product.status}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col space-y-1'>
                                <div className='flex space-x-2'>
                                    <div className='font-bold'>
                                        ผู้ขาย:
                                    </div>
                                    <div>
                                        {product.userDetails.first_name} {product.userDetails.last_name}
                                    </div>
                                </div>
                                <div className='flex space-x-2'>
                                    <div className='font-bold'>
                                        Tel:
                                    </div>
                                    <div>
                                        {product.userDetails.phone_number}
                                    </div>
                                </div>
                            </div>

                            <div>
                                {product.description}
                            </div>

                            <div className='flex space-x-4'>
                                <button className='py-1 px-4 border border-black bg-amber-300 hover:bg-amber-400'>
                                    <div className='text-xl'>
                                        ซื้อเลย
                                    </div>
                                </button>
                                <button className='py-1 px-4 border border-black bg-gray-300 hover:bg-gray-400'>
                                    <div className='text-xl'>
                                        หยิบใส่ตระกร้า
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
