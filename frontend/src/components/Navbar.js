import React, { useState } from 'react'

// Route
import { Link } from 'react-router-dom'

// Custom Styles
import '../pages/Form.css'

// Components

export const Navbar = () => {

  const [isShowToggle, setIsShowToggle] = useState(false)

  return (
      <div>
        <div className='bg-mycolor-200 sticky top-0 w-full z-50 shadow-lg'>
          <div className='max-w-6xl mx-auto'>
            <div className='flex justify-between'>
              {/* Left */}
              <div className='flex space-x-6 items-center p-4'>

                {/* Toggle Button */}
                <div className='md:hidden flex'>
                  <button onClick={() => setIsShowToggle(!isShowToggle)} className='items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                {/* Logo */}
                <Link to="/" className='font-extrabold font-serif italic text-2xl'>
                  Mongsue
                </Link>

                {/* AboutUs */}
                <div className='hidden md:flex'>
                  <button className='text-sm hover:text-gray-500'>
                    เกี่ยวกับเรา
                  </button>
                </div>
              </div>

              {/* Mid Searchbox */}
              <div className='hidden md:flex items-center p-4'>
                <form className='flex'>
                  <input className='px-2 py-1 w-72 focus:outline-none' type="text" placeholder='กำลังมองหาอะไรอยู่...'/>
                  <button className='bg-mycolor-400 hover:bg-mycolor-500' type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Right */}
              <div className='hidden md:flex space-x-6 items-center p-4'>
                <div>
                  <Link to="/login" className='text-sm hover:text-gray-500'>
                    ลงชื่อเข้าสู่ระบบ
                  </Link>
                </div>
                <div>
                  <button className='text-sm hover:text-gray-500'>
                    สมัครสมาชิก
                  </button>
                </div>
              </div>
            </div>

            {/* Toggle Bar */}
            {isShowToggle?
              <div className='md:hidden w-full bg-neutral-300'>
                <div className="flex flex-col">

                  {/* Searchbox */}
                  <div className='py-3'>
                    <form className='flex justify-center'>
                      <input className='px-2 py-1 w-72 focus:outline-none' type="text" placeholder='กำลังมองหาอะไรอยู่...'/>
                      <button className='bg-mycolor-400 hover:bg-mycolor-500' type='submit'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </form>
                  </div>

                  {/* Login */}
                  <div>
                    <Link to="/login" className='block w-full text-sm text-center hover:bg-mycolor-100 p-4'>
                      ลงชื่อเข้าสู่ระบบ
                    </Link>
                  </div>

                  {/* Register */}
                  <div>
                    <Link to="" className='block w-full text-sm text-center hover:bg-mycolor-100 p-4'>
                      สมัครสมาชิก
                    </Link>
                  </div>

                  {/* AboutUs */}
                  <div>
                    <Link to="" className='block w-full text-sm text-center hover:bg-mycolor-100 p-4'>
                      เกี่ยวกับเรา
                    </Link>
                  </div>
                </div>
              </div>
            :null}

          </div>
        </div>
      </div>
  )
}
