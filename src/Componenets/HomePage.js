import React from 'react'
import FirstSection from './FirstSection'

import './Home.css'
import TopNewsSection from './TopNewsSection'



function HomePage() {
  return (
    <>
    
        {/* first section */}
        <div id='first-section' className="">
            <FirstSection/>
        </div>
        {/* top news section */}
        <div id='top-news-section' className="">
            <TopNewsSection/>
        </div>
    
    </>
  )
}

export default HomePage
