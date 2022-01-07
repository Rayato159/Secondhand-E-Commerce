import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}>
                            
                        </Route>
                    </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
