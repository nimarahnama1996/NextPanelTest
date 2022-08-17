import React from 'react'
import MapOverview from '../../components/MapOverview/MapOverview'
import OnlineUsersOverview from '../../components/OnlineUsersOverview/OnlineUsersOverview'
import SummaryOverview from '../../components/SummaryOverview/SummaryOverview'
import HomeLineChart from '../../components/HomeLineChart/HomeLineChart'

import './Home.css'



const Home = () => {
  return (
    <div>

    <header className='home-overview-header'>
      <h1>Overview</h1>
      <p>of the next products</p>
    </header>

    <div>
      <OnlineUsersOverview/>
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