import React from 'react'
import { Select,Input, } from 'antd';
import{SearchOutlined } from '@ant-design/icons'

import './MainIcons.css'



import Power from '../../img/on-off-icon.svg'
import Bell from '../../img/notification.svg'
import Setting from '../../img/settting.svg'
import Chat from '../../img/chat-icon.svg'
import SearchIcon from '../../img/search-icon.svg'
import Profile from '../../img/profile-icon.svg'
import Logo from '../../img/logo.svg'




const { Option } = Select;
const { Search } = Input;



const MainIcons = () => {

  
 


  return (

    

    <div>
    <div className='main-icons-nav'>
   
    <ul >
        <li className='main-icons-input'><Input size="middle" placeholder='Search Dashboard' prefix={<SearchOutlined style={{color:'#F4F4F5'}}/>} /></li>
        <li className='main-icons-profile'><img src={Profile} alt='profile'/></li>
        <li className='main-icons-option'><Select size='small' defaultValue="admin@nxt.services"><Option value="admin" >admin@nxt.services</Option></Select></li>
        <li className='main-icons-search'><img src={SearchIcon} alt='search'/></li>
        <li className='main-icons-chat'><img src={Chat} alt='chat'/></li>
        <li className='main-icons-setting'><img src={Setting} alt='setting'/></li>
        <li className='main-icons-bell'><img src={Bell} alt='bell'/></li>
        <li className='main-icons-power'><img src={Power} alt='power' style={{color:'white'}}/></li>
        
    </ul>
    </div>

    <div>
    <li className='main-icons-logo'><img src={Logo} alt='logo'/></li>
    </div>
    </div>
  )
}

export default MainIcons