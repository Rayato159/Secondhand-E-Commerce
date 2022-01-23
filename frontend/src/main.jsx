import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Redux
import store from './app/store'
import { Provider } from 'react-redux'

// React Router
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Components
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

// Pages
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='flex flex-col justify-between h-screen font-serif'>
        <Navbar />
          <Routes>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)