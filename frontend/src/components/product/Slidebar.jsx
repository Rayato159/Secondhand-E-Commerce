import React, { useState, useEffect } from 'react'

// Icons
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

export const Slidebar = ({ props }) => {

    // Hooks State
    const [currenIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setCurrentIndex(0)
    }, [])

    const onNextClick = () => {
        if(currenIndex === props.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currenIndex + 1)
        }
    }

    const onPrevClick = () => {
        if(currenIndex === 0) {
            setCurrentIndex(props.length - 1)
        } else {
            setCurrentIndex(currenIndex - 1)
        }
    }

    return (
        <div className='flex items-center h-full w-full select-none relative'>
            <div className='flex flex-col space-y-3 aspect-video'>
                <img className='md:w-96 md:h-72 w-full h-72 overflow-hidden object-cover' src={props[currenIndex]? props[currenIndex].path: ''} />
            </div>

            <div className='flex items-center justify-between absolute w-full top-1/2 -translate-y-1/2 py-2 px-2'>
                <button onClick={onPrevClick}>
                    <IoIosArrowBack className='w-6 h-6' />
                </button>
                <button onClick={onNextClick}>
                    <IoIosArrowForward className='w-6 h-6' />
                </button>
            </div>
        </div>
    )
}
