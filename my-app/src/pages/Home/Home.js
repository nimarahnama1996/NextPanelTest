import React from 'react'
import MapHome from '../../components/MapHome/MapHome'
import MapOverview from '../../components/MapOverview/MapOverview'
import OnlineUsers from '../../components/OnlineUsers/OnlineUsers'


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

    </div>

    
  )
}

export default Home