import React from 'react'

// Components
import Category from '../components/Category'
import TopSearch from '../components/TopSearch'
import Footer from '../components/Footer'

function Home() {
    return (
        <div className="Home">
            <Category />
            <TopSearch />
            <Footer />
        </div>
    )
}

export default Home
