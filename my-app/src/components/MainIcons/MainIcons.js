import React from 'react'
import { Select,Input, } from 'antd';
import{BiSearch} from 'react-icons/bi'

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
        <li className='main-icons-input'><Input size="middle" placeholder='Search...' prefix={<BiSearch style={{color:'808080'}}/>} /></li>
        <li className='main-icons-profile'><img src={Profile} alt='profile'/></li>
        <li className='main-icons-option'><select> <option value='admin'>admin@nxt.services</option> </select></li>
        <li className='main-icons-search'><img src={SearchIcon} alt='search'/></li>
        <li className='main-icons-chat'><img src={Chat} alt='chat'/></li>
        <li className='main-icons-setting'><img src={Setting} alt='setting'/></li>
        <li className='main-icons-bell'><img src={Bell} alt='bell'/></li>
        <li className='main-icons-power'><img src={Power} alt='power' /></li>
        
    </ul>
    </div>

    <div>
    <li className='main-icons-logo'><img src={Logo} alt='logo'/></li>
    </div>
    </div>
  )
}

export default MainIcons