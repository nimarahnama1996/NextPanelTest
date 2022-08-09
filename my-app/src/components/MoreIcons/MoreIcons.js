import React,{useState} from 'react'
import {MoreOutlined,CloseOutlined,PoweroffOutlined,MessageOutlined,SearchOutlined } from '@ant-design/icons'



import Bell from '../../img/notification.svg'
import Setting from '../../img/settting.svg'
import Profile from '../../img/profile-icon.svg'
import Search from '../../img/search-icon.svg'
import './MoreIcons.css'


const MoreIcons = () => {

  const [active,setActive] = useState(false)


    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className='header'>

    <div className='menu-icon'>
       <MoreOutlined className='menu'  onClick={showMenu}/>
    </div>
    <nav className={active ? 'sliders actives' :  'sliders'}>
       <ul>

       <div className='closed'>
           <CloseOutlined style={{marginTop:'30px'}} className='close' onClick={showMenu}/>
       </div>

       <div className='navbar-icons'>
      <ul>
        <li><PoweroffOutlined  style={{fontSize:'21px'}}/></li>
        <li className='navbar-bell'><img src={Bell} alt='bell' /></li>
        <li className='navbar-setting'><img src={Setting} alt='setting'/></li>
        <li><MessageOutlined style={{fontSize:'21px', marginTop:'30px'}}/></li>
        <li className='navbar-profile'><img src={Profile} alt='profile'/></li>
        <li className='navbar-search'><img src={Search} alt='Search'/></li>
      </ul>
    </div>
     
       </ul>
    </nav>

   
   </div>
  )
}

export default MoreIcons