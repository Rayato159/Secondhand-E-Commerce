import React, { useState, useEffect } from 'react'

// React rounter
import { useNavigate } from 'react-router-dom';

// Components
import { LoginHeader } from "../components/login/LoginHeader";
import { EmailInput } from "../components/login/EmailInput";
import { PasswordInput } from "../components/login/PasswordInput";
import { LoginError } from '../components/login/LoginError'; 

// Services
import { login } from '../services/userServices';

// Redux store
import { useSelector, useDispatch } from 'react-redux';
import { loginLoading, loginSuccess, loginFail } from '../features/loginSlice'

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(localStorage.getItem("accessToken"))

    // Navigate
    const navigate = useNavigate()

    // Redux State
    const dispatch = useDispatch()
    const { isAuth, isLoginLoading, isLoginError } = useSelector((state) => state.login)

    const onSubmitHandle = async (e) => {
        e.preventDefault()

        dispatch(loginLoading())
        try {
            const res = await login(email, password)
            dispatch(loginSuccess(res))
        } catch(e) {
            dispatch(loginFail(e.message))
        }
    }

    useEffect(() => {
        if(token || isAuth) {
            navigate('/')
        }
    }, [isAuth])

    return (
        <div className="w-full py-6">
            <div className="w-80 mx-auto shadow-xl bg-white px-4 py-6 rounded-xl">
                <div className="flex justify-center">

                    {/* Login forms */}
                    <form onSubmit={onSubmitHandle} className="flex flex-col space-y-6">
                        <LoginHeader />
                        <div className="flex flex-col space-y-4">

                            <EmailInput props={(value) => setEmail(value)}/>
                            <PasswordInput props={(value) => setPassword(value)} />

                            {/* Error */}
                            {isLoginError && <LoginError />}

                        </div>

                        {/* Button */}
                        <div className="flex justify-center pt-3">
                            {isLoginLoading?
                                <button disabled={true} className="p-2 rounded-full shadow-md w-full disabled:bg-mycolor-200" type="submit">
                                    <div className="font-bold">
                                        กำลังดำเนินการ...
                                    </div>
                                </button>:
                                <button className="bg-mycolor-300 p-2 rounded-full shadow-md w-full hover:bg-mycolor-200 hover:-translate-y-1 duration-300" type="submit">
                                    <div className="font-bold">
                                        เข้าสู่ระบบ
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
