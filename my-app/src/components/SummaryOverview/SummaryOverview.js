import React from 'react'


import './SummaryOverview.css'



import settingSummary from '../../img/settting-sum.svg'
import refreshSummary from '../../img/refresh.svg'
import closeSummary from '../../img/close.svg'
import locationSummary from '../../img/location2.svg'
import settingBlueSummary from '../../img/setting2.svg'



const SummaryOverview = () => {
  return (
    <div >

        <div className='summary-overview-title'>

        <h1>Summary</h1>

       
      <div className='summary-overview-icons'>
       <img src={settingSummary} alt='setting' /> 
        <img src={refreshSummary} alt='refresh'/>
        <img src={closeSummary} alt='close'/>
     
      </div>

        </div>

        <div className='summary-overview-user'>
            <h3>  All <span>User: 80332</span> </h3>

            <img src={locationSummary} alt='location' style={{marginLeft:'14px'}}/> <p>3 country, 34cites</p>
        </div>

        <div className='summary-overview-active'>
        <h3> cloding :<span> Active</span></h3>

        <img src={settingBlueSummary} alt='location' style={{marginLeft:'14px'}}/> <p>7 nodes are in use</p>
        </div>
    </div>
  )
}

export default SummaryOverview