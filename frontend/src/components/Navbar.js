import React, { useEffect, useState } from 'react'

// Route
import { Link } from 'react-router-dom'

// Custom Styles
import '../pages/Form.css'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { searchLoading, searchSuccess }  from '../features/searchSlice'
import { userLoading, userSuccess, userFail } from '../features/userSlice'
import { logout } from '../features/loginSlice'

// Services
import { getUserButMe } from '../services/userService'

// Components
import { LinkNavbar } from './LinkNavbar'
import { ResLinkNavbar } from './ResLinkNavbar'
import { Searchbox } from './Searchbox'

export const Navbar = () => {

  // Hook State
  const [isShowToggle, setIsShowToggle] = useState(false)
  const [searchEvent, setSearchEvent] = useState("")

  // Redux State
  const dispatch = useDispatch()
  const [{ isAuth }, { isUserLoading, isUser, isUserErrors }] = useSelector((state) => [
    state.login,
    state.user,
  ])

  const parentOnSubmit = (e) => {
    e.preventDefault()

    dispatch(searchLoading())
    dispatch(searchSuccess(searchEvent))
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await getUserButMe()
        dispatch(userSuccess(res))
      } catch(e) {
        dispatch(userFail(e.message))
      }
    }

    dispatch(userLoading())
    fetchUser()
  }, [isAuth])

  return (
      <div>
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
                  <Link to="/about" className='text-sm hover:text-gray-500'>
                    เกี่ยวกับเรา
                  </Link>
                </div>
              </div>

              {/* Mid Searchbox */}
              <div className='hidden md:flex items-center p-4'>
                <Searchbox onSumbitHandle={(e) => parentOnSubmit(e)} onChangeHandle={(value) => setSearchEvent(value)} />
              </div>

              {/* Right */}
              {isUser?
                <div className='hidden md:flex space-x-6 items-center p-4'>
                  <LinkNavbar path={"/profile"} message={isUser.first_name}/>
                  <button onClick={() => dispatch(logout())} className='text-sm hover:text-gray-500'>
                    ออกจากระบบ
                  </button>
                </div>:
                <div className='hidden md:flex space-x-6 items-center p-4'>
                  <LinkNavbar path={"/login"} message={"เข้าสู่ระบบ"}/>
                  <LinkNavbar path={"/register"} message={"สมัครสมาชิก"}/>
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
                  <ResLinkNavbar path={"/login"} message={"เข้าสู่ระบบ"}/>

                  {/* Register */}
                  <ResLinkNavbar path={"/register"} message={"สมัครสมาชิก"}/>

                  {/* AboutUs */}
                  <ResLinkNavbar path={"/about"} message={"เกี่ยวกับเรา"}/>
                </div>
              </div>
            :null}

          </div>
        </nav>
      </div>
  )
}
