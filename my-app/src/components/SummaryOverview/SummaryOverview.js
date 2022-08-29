import React from 'react'


import './SummaryOverview.css'


import settingSummary from '../../img/settting.svg'
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
      <img src={settingSummary}  alt='setting' style={{marginRight:'10px'}}/>
        <img src={refreshSummary} alt='refresh' style={{marginRight:'10px'}}/>
        <img src={closeSummary} alt='close' style={{marginRight:'10px'}}/>
      </div>

        </div>

        <div className='summary-overview-user'>
            <h3>All User: 80332</h3>

            <img src={locationSummary} alt='location' style={{marginLeft:'14px'}}/> <p>3 country, 34cites</p>
        </div>

        <div className='summary-overview-active'>
        <h3> cloding : Active</h3>

        <img src={settingBlueSummary} alt='location' style={{marginLeft:'14px'}}/> <p>7 nodes are in use</p>
        </div>
    </div>
  )
}

export default SummaryOverview