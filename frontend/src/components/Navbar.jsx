import React, { useState, useEffect } from 'react'

// Route
import { Link } from 'react-router-dom'

// Custom Styles
import '../pages/Form.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/loginSlice'
import { setSearch, setCategory } from '../features/searchSlice'

// Components
import { LinkNavbar } from './LinkNavbar'
import { ResLinkNavbar } from './ResLinkNavbar'
import { Searchbox } from './Searchbox'

export const Navbar = () => {

  // Hook state
  const [isShowToggle, setIsShowToggle] = useState(false)
  const [searchEvent, setSearchEvent] = useState("")
  const [username, setUsername] = useState(null)

  // Redux state
  const dispatch = useDispatch()
  const [
    { isToken },
  ] = useSelector((state) => [
    state.login,
  ])

  const parentOnSubmit = (e) => {
    e.preventDefault()

    dispatch(setSearch(searchEvent))
  }

  useEffect(() => {
    setUsername(localStorage.getItem("first_name"))
  }, [isToken])

  return (
    <nav className='bg-mycolor-200 sticky top-0 w-full z-50 shadow-lg'>
      <div className='max-w-7xl mx-auto'>
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
            <Link to="/" className='font-extrabold italic text-2xl'>
              Mongsue
            </Link>

            {/* AboutUs */}
            <div className='hidden md:flex'>
              <Link to="about" className='text-sm hover:text-gray-500'>
                เกี่ยวกับเรา
              </Link>
            </div>
          </div>

          {/* Mid Searchbox */}
          <div className='hidden md:flex items-center p-4'>
            <Searchbox onSumbitHandle={(e) => parentOnSubmit(e)} onChangeHandle={(value) => setSearchEvent(value)} />
          </div>

          {/* Right */}
          {username?
            <div className='hidden md:flex space-x-6 items-center p-4'>
              <LinkNavbar path={"profile"} message={username}/>
              <button onClick={() => dispatch(logout())} className='text-sm hover:text-gray-500'>
                ออกจากระบบ
              </button>
            </div>:
            <div className='hidden md:flex space-x-6 items-center p-4'>
              <LinkNavbar path={"login"} message={"เข้าสู่ระบบ"}/>
              <LinkNavbar path={"register"} message={"สมัครสมาชิก"}/>
            </div>
          }
        </div>

        {/* Toggle Bar */}
        {isShowToggle?
          <div className='md:hidden w-full'>
            <div className="flex flex-col">

              {/* Searchbox */}
              <div className='py-3'>
                <Searchbox onSumbitHandle={(e) => parentOnSubmit(e)} onChangeHandle={(value) => setSearchEvent(value)} />
              </div>

              {/* Login */}
              {username?
                <ResLinkNavbar path={"/profile"} message={username}/>:<ResLinkNavbar path={"/login"} message={"เข้าสู่ระบบ"}/>
              }

              {/* Register */}
              {username?
                <div>
                  <button onClick={() => dispatch(logout())} className='block w-full text-sm text-center hover:bg-mycolor-100 p-4 duration-300'>
                      ออกจากระบบ
                  </button>
                </div>:
                <ResLinkNavbar path={"register"} message={"สมัครสมาชิก"}/>
              }

              {/* AboutUs */}
              <ResLinkNavbar path={"about"} message={"เกี่ยวกับเรา"}/>
            </div>
          </div>
        :null}

      </div>
    </nav>
  )
}
