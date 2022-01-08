import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Sell from './pages/Sell'


function App() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <BrowserRouter>
                    <Navbar />
                        <Routes>
                            <Route>
                                <Route path="/" element={<Home />} />
                                <Route path="login" element={<Login />} />
                                <Route path="register" element={<Register />} />
                                <Route path="products/sell" element={<Sell />} />
                            </Route>
                        </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
