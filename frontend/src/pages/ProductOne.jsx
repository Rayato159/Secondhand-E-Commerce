import React, { useEffect, useState } from 'react'

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
            setIsPending(false)
        }
    }

    useEffect(() => {
        fetchProduct(productId)
    }, [])

    console.log(product)

    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-around'>
                    <div className='flex justify-center'>
                        <div>
                            Images Album
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            Products Details
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
