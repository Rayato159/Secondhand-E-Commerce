import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Sell from './pages/Sell'
import Products from './pages/Products'
import ChangePassword from './pages/ForgetPassword'
import NotFound from './pages/NotFound'

export const App = () => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(sessionStorage.getItem("accessToken"))
    const [error, setError] = useState(null)

    const isLogin = (userDetails) => {
        signIn(userDetails)
    }

    const signIn = async (userDetails) => {
        const res = await fetch('http://localhost:3000/api/auth/signin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
        })
    
        if(res.status === 201) {
            const token = await res.json()
            sessionStorage.setItem("accessToken", token.accessToken)
            setToken(sessionStorage.getItem("accessToken"))
        } else {
            const error = await res.json()
            setError(error)
        }

        getUserButMe(token)
    }

    const getUserButMe = async (token) => {
        const res = await fetch('http://localhost:3000/api/auth/users/me', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if(res.status === 200) {
            const user = await res.json()
            setUser(user)
        } else {
            setUser(null)
        }
    }

    const isLogout = (token) => {
        if(window.confirm("Are you sure?")) {
            sessionStorage.removeItem("accessToken")
            setToken(token)
        }
    }

    useEffect(() => {
        getUserButMe(token)
    }, [token])
    
    return (
        <div className="flex flex-col h-screen justify-between">
            <BrowserRouter>
                    <Navbar user={user} isLogout={isLogout} />
                        <Routes>
                            <Route>
                                <Route path="/" element={<Home />} />
                                <Route path="login" element={<Login isLogin={isLogin} user={user} error={error} />} />
                                <Route path="change_password" element={<ChangePassword />} />
                                <Route path="register" element={<Register user={user} />} />
                                <Route path="products" element={<Products />} />
                                <Route path="products/sell" element={<Sell />} />
                                <Route path="*" element={<NotFound />} />
                            </Route>
                        </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    )
}
