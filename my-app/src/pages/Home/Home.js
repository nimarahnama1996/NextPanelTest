import React from 'react'
import HomeLineChart from '../../components/HomeLineChart/HomeLineChart'
import MapOverview from '../../components/MapOverview/MapOverview'
import OnlineUsers from '../../components/OnlineUsers/OnlineUsers'
import SummaryOverview from '../../components/SummaryOverview/SummaryOverview'


import './Home.css'


const Home = () => {
  return (
    <div>

    <header className='home-overview-header'>
      <h1>Overview</h1>
      <p>of the next products</p>
    </header>

    <div>
      <OnlineUsers/>
    </div>

    <main>
     <MapOverview/>
    </main>

    <div>
      <SummaryOverview/>
    </div>

    <div>
      <HomeLineChart/>
    </div>

    </div>

    
  )
}

export default Home