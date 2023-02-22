import React from 'react'
import { Banner, Footer, LandingPage, Navbar, Title } from '../../components'
import './Home.css'

const Home = () => {
  return (
      <div className='Home'>
          
          <Navbar />
          <div className="banner">
          <Banner/>
          </div>
          <div className='Home_title'>
          <Title/>
        </div>
          <LandingPage />
          <Footer />
      
    </div>
  )
}

export default Home