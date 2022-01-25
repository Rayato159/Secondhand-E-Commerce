import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Redux store
import { useSelector } from 'react-redux'

// Services
import { createProduct } from '../services/productService'

// Components
import { ReactDropZone } from '../components/ReactDropZone'

export const Sell = () => {

    // Navigate
    const navigate = useNavigate()

    // Import state from store
    const { isAuth } = useSelector((state) => state.login)

    // State
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [images, setImages] = useState([])

    // Errors
    const [errors, setErrors] = useState([])

    const onSubmitHandle = async (e) => {
        e.preventDefault()

        if(window.confirm('กรุณากดยืนยันอีกครั้ง หากท่าแน่ใจแล้ว')) {
            try {
                const res = await createProduct({
                    product_name: productName,
                    price: price,
                    description: description,
                    address: address,
                })
                console.log(res)
            } catch(e) {
                setErrors(e.message)
            }
        }
    }

    useEffect(() => {
        if(!isAuth) {
            navigate('/login')
        }
    }, [])

    return (
        <div>
            <div className='max-w-4xl mx-auto md:p-6 p-4'>
                <div className='flex flex-col space-y-1 w-full px-6 py-4 bg-mycolor-600'>
                    <div className='font-bold text-2xl italic text-white'>
                        Mongsue
                    </div>
                    <div className='text-white text-sm'>
                        ***กรุณากรอกข้อมูลของสินค้าตามความเป็นจริง หากสินค้าไม่ตรงตามที่ระบุ ท่านอาจถูกดำเนินการทางกฎหมายได้
                    </div>
                </div>
                <form onSubmit={onSubmitHandle} className='bg-white flex flex-col space-y-6 md:p-8 p-4 shadow-xl'>
                    {/* Name */}
                    <div className='flex space-x-3'>
                        <label className='md:text-sm text-xs text-right md:w-44 w-48'>ระบุชื่อสินค้า</label>
                        <input onChange={(e) => setProductName(e.target.value)} className='bg-transparent border border-black w-full h-7 text-sm p-2 focus:outline-mycolor-600' type="text" />
                    </div>

                    {/* Price */}
                    <div className='flex space-x-3'>
                        <label className='md:text-sm text-xs text-right md:w-44 w-48'>ระบุราคาที่เหมาะสม</label>
                        <input onChange={(e) => setPrice(e.target.value)} className=' bg-transparent border border-black w-full h-7 text-sm p-2 focus:outline-mycolor-600' type="text" />
                    </div>

                    {/* Description */}
                    <div className='flex space-x-3'>
                        <label className='md:text-sm text-xs text-right md:w-44 w-48'>คำอธิบายสินค้า</label>
                        <textarea onChange={(e) => setDescription(e.target.value)} className='bg-transparent border border-black w-full text-sm p-2 focus:outline-mycolor-600' rows="5" type="text"></textarea>
                    </div>

                    {/* Picture limit at 6 */}
                    <div className='flex space-x-3'>
                        <label className='md:text-sm text-xs text-right md:w-44 w-48'>รูปภาพสินค้า</label>
                        <ReactDropZone props={(acceptedFiles) => setImages(acceptedFiles)} />
                    </div>

                    {/* Address */}
                    <div className='flex space-x-3'>
                        <label className='md:text-sm text-xs text-right md:w-44 w-48'>ที่อยู่สินค้า</label>
                        <textarea onChange={(e) => setAddress(e.target.value)} className='bg-transparent border border-black w-full text-sm p-2 focus:outline-mycolor-600' rows="3" type="text"></textarea>
                    </div>

                    <div className="flex space-x-3">
                        <label className='md:w-44 w-48'></label>
                        {errors.length > 0 &&
                            <div className='w-full bg-red-300 border border-red-500 p-2'>
                                {errors.map((e, i) => {
                                    return (
                                        <div key={i} className='text-sm text-red-500'>
                                            * {e}
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>

                    <div className="flex space-x-3">
                        <label className='md:w-44 w-48'></label>
                        <button type="submit" className='w-full p-2 text-white bg-mycolor-600 hover:bg-mycolor-500'>
                            ยืนยันการลงขาย
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
