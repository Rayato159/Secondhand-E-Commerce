import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Select component
import Select from 'react-select'

// Upload component
import { ProductPhotosUpload } from '../components/Sell/ProductPhotosUpload'

// Styles
import './Form.css'

// React hook forms
import { useForm } from "react-hook-form";

// Icons
import { BiErrorCircle } from 'react-icons/bi'
import { ImSpinner8 } from 'react-icons/im'
import { AiOutlineTags } from 'react-icons/ai'

// Redux
import { useSelector } from 'react-redux'

// Services
import { getCategories } from '../services/categoryServices';
import { createProduct, uploadProductPhotos } from '../services/productServices'

export const Sell = () => {

    // Navigate
    const navigate = useNavigate()

    // Redux state
    const { isToken } = useSelector((state) => state.login)

    // Hook state
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState("")

    // State to create product
    const [options, setOptions] = useState([])
    const [category, setCategory] = useState("")
    const [images, setImages] = useState([])

    // React hook forms
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        setIsPending(true)

        // try {
        //     const res = await registerNewUser(data)
        //     setIsPending(false)
        //     navigate('/login')
        // } catch(e) {
        //     setIsPending(false)
        //     setError(e.message)
        // }
    }

    const fetchCategories = async () => {
      try {
        const res = await getCategories()
        setOptions(res)
      } catch(e) {
        setOptions(e.message)
      }
    }

    useEffect(() => {
        if(!localStorage.getItem("accessToken")) {
            navigate('/')
        }
    }, [isToken])

    useEffect(() => {
      fetchCategories()
    }, [])
    
    console.log(options)

    return (
        <div className="w-full py-10">
            <div className="max-w-md mx-auto shadow-xl bg-white border border-gray-200 px-4 py-10 md:rounded-xl">
                <div className="flex justify-center">
                    {/* Register forms */}
                    <form onSubmit={handleSubmit(onSubmit)} className="w-72 flex flex-col space-y-6">

                        {/* Header */}
                        <div className='flex space-x-2 items-center'>
                            <div>
                              <AiOutlineTags className='h-6 w-6' />
                            </div>
                            <div className='text-xl font-bold'>
                              กรุณากรอกข้อมูลสินค้า
                            </div>
                        </div>

                        {/* Form */}
                        <div className='w-full flex flex-col space-y-4'>
                            {/* Title */}
                            <div className='flex flex-col space-y-1'>
                                <label className='font-bold'>Title</label>
                                <input className="items-center w-full border border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="เครื่องบิน F22"
                                    {...register("title", { required: true })}
                                />
                                {errors.title?.type === 'required' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Title is required.
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Description */}
                            <div className='flex flex-col space-y-1'>
                                <label className='font-bold'>Description</label>
                                <textarea className="items-center w-full border border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="กรุณาใส่คำอธบาย"
                                  rows="5"
                                  {...register("description", { required: true })}
                                />
                                {errors.description?.type === 'required' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Description is required.
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Price */}
                            <div className='flex flex-col space-y-1'>
                              <label className='font-bold'>Price</label>
                                <div className='flex space-x-2 items-center'>
                                    <input className="w-full border border-mycolor-500 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="กรุณาตั้งราคาที่เหมาะสม"
                                        {...register("price", { required: true, pattern: /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/ })}
                                    />
                                </div>
                                {errors.price?.type === 'required' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                            Price is required.
                                        </div>
                                    </div>
                                }
                                {errors.price?.type === 'pattern' &&
                                    <div className='flex text-xs text-red-500 items-center space-x-2'>
                                        <BiErrorCircle />
                                        <div>
                                          Example 3435.25
                                        </div>
                                    </div>
                                }
                            </div>
                            
                            {/* Category */}
                            <div className='flex flex-col space-y-2'>
                                <label className='font-bold'>Category</label>
                                <div>
                                  <Select placeholder="เลือกประเภทของสินค้า" options={options} />
                                </div>
                            </div>

                            {/* Images uplaod field */}
                            <div className='flex flex-col space-y-2'>
                              <label className='font-bold'>Image upload</label>
                              <div>
                                <ProductPhotosUpload props={(files) => setImages(files)}/>
                              </div>
                            </div>

                            {error && 
                                <div className='flex space-x-2 text-xs text-red-500 items-center'>
                                    <div>
                                        <BiErrorCircle />
                                    </div>
                                    <div>
                                        {error}
                                    </div>
                                </div>
                            }
                        </div>
                        
                        {/* Button */}
                        <div>
                            {isPending?
                                <button disabled className="flex space-x-3 justify-center p-2 rounded-full shadow-md w-full disabled:bg-mycolor-200 disabled:text-gray-400" type="submit">
                                    <ImSpinner8 className='w-6 h-6 animate-spin text-gray-400'/>
                                    <div className="font-bold">
                                        กำลังดำเนินการ...
                                    </div>
                                </button>:
                                <button className="bg-mycolor-300 p-2 rounded-full shadow-md w-full hover:bg-mycolor-200 hover:-translate-y-1 duration-300" type="submit">
                                    <div className="font-bold">
                                        ยืนยันการลงขาย
                                    </div>
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
