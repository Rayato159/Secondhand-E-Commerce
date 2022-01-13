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
import ChangePassword from './pages/ChangePassword'
import NotFound from './pages/NotFound'

export const App = () => {

    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        setToken(sessionStorage.getItem("accessToken"))
    }, [])

    useEffect(() => {
        fetchUser()
    }, [token])

    const fetchUser = async () => {
        const res = await fetch('http://localhost:3000/api/auth/users/me', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })

        if(res.status === 200) {
            const user = await res.json()
            
            setUser(user)
        }
    }
    
    return (
        <div className="flex flex-col h-screen justify-between">
            <BrowserRouter>
                    <Navbar user={user} />
                        <Routes>
                            <Route>
                                <Route path="/" element={<Home />} />
                                <Route path="login" element={<Login />} />
                                <Route path="change_password" element={<ChangePassword />} />
                                <Route path="register" element={<Register />} />
                                <Route path="products/sell" element={<Sell />} />
                                <Route path="*" element={<NotFound />} />
                            </Route>
                        </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    )
}
