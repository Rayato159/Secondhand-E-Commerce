import React, { useState, useEffect, useRef } from 'react'

// Icons
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

let count = 0
export const Slidebar = ({ props }) => {

    // Hooks State
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentPhoto, setCurrentPhoto] = useState(props[0].product_photo_id)
    const [lastIndex, setLastIndex] = useState(currentIndex % props.length - 1)
    const [images, setImages] = useState(props.slice(0, props.length))
    const slideRef = useRef()

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim')
    }

    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation)
        setCurrentIndex(0)
    }, [])

    const onNextClick = () => {
        count = (count + 1) % props.length
        setCurrentIndex(count)
        setCurrentPhoto(props[count].product_photo_id)

        // Queue images forward
        images.push(images.shift())

        slideRef.current.classList.add('fade-anim')
    }

    const onPrevClick = () => {
        const productsLength = props.length
        count = (currentIndex + productsLength - 1) % productsLength
        setCurrentIndex(count)
        setCurrentPhoto(props[count].product_photo_id)

        // Queue images backward
        images.splice(0, 0, images.pop())

        slideRef.current.classList.add('fade-anim')
    }

    return (
        <div className='flex flex-col space-y-4 items-start'>
            <div ref={slideRef} className='flex items-center h-full w-full select-none relative'>
                <div className='flex flex-col space-y-3 aspect-video'>
                    <img className='md:w-96 md:h-64 w-96 h-56 overflow-hidden object-cover' src={props[currentIndex]? props[currentIndex].path: ''} />
                </div>
                <div className='flex items-center justify-between absolute w-full top-1/2 -translate-y-1/2 py-2 px-2'>
                    <button className='bg-black text-white p-1 opacity-50 hover:opacity-90' onClick={onPrevClick}>
                        <IoIosArrowBack className='w-6 h-6' />
                    </button>
                    <button className='bg-black text-white p-1 opacity-50 hover:opacity-90' onClick={onNextClick}>
                        <IoIosArrowForward className='w-6 h-6' />
                    </button>
                </div>
            </div>
            <div className='flex space-x-3'>
                {props &&
                    images.slice(0, lastIndex).map((image) => {
                        if(image.product_photo_id === currentPhoto) {
                            return (
                                <img key={image.product_photo_id} className='aspect-video h-12 w-20 object-cover border-2 border-black shadow-md' src={image? image.path: ''} />
                            )
                        } else {
                            return (
                                <img onClick={() => setCurrentIndex(i)} key={image.product_photo_id} className='aspect-video h-12 w-20 object-cover shadow-md hover:cursor-pointer' src={image? image.path: ''} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
