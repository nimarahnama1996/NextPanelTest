import React from 'react'


import './OnlineUsersOverview.css'



import usersLocation from '../../img/location.svg'


const OnlineUsersOverview = () => {
  return (
    <div className='online-user-home'>
        <h4>Online users</h4>
        <p>3213 <img src={usersLocation} alt='location' style={{width:'15px', height:'24px', marginTop:'-9px'}}/> </p> 
       
    </div>
  )
}

export default OnlineUsersOverview