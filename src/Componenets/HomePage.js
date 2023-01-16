import React from 'react'
import BreakingNewsSection from './BreakingNewsSection'
import FirstSection from './FirstSection'
import './Home.css'
import RecentNewsSection from './RecentNewsSection'
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
        {/* Breacking News section */}
        <div id='' className=''>
          <BreakingNewsSection/>
        </div>
          {/* Recent News section */}
          <div id='' className=''>
          <RecentNewsSection/>
        </div>
    
    </>
  )
}

export default HomePage
