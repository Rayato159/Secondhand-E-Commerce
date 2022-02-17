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
import { Products } from './pages/Products'
import { Sell } from './pages/Sell'
import { Register } from './pages/Register'
import { Profile } from './pages/Profile'
import { ProductOne } from './pages/ProductOne'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='h-screen flex flex-col justify-between'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:product_id" element={<ProductOne />}/>
            <Route path="sell" element={<Sell />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)