import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Compenents
import Navbar from './components/Navbar';
import Category from './components/Category';
import TopSearch from './components/TopSearch';
import Footer from './components/Footbar'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Category />
    <TopSearch />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
