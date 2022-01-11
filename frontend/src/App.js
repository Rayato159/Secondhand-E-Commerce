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
import TestComponents from './pages/TestComponents'


function App() {

    const [user, setUser] = useState(null)
    const [isToken, setIsToken] = useState(null)

    // useEffect(() => {
    //     setIsToken()
    // }, [])

    return (
        <div className="flex flex-col h-screen justify-between">
            <BrowserRouter>
                    <Navbar user={user}/>
                        <Routes>
                            <Route>
                                <Route path="/" element={<Home />} />
                                <Route path="login" element={<Login />} />
                                <Route path="change_password" element={<ChangePassword />} />
                                <Route path="register" element={<Register />} />
                                <Route path="products/sell" element={<Sell />} />
                                <Route path="tests" element={<TestComponents />} />
                            </Route>
                        </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
