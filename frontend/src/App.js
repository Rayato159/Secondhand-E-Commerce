import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Sell from './pages/Sell'


function App() {
    return (
        <div className="App">
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
            </BrowserRouter>
        </div>
    )
}

export default App
