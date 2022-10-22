import React from 'react'
import {MenuOutlined,MoreOutlined} from '@ant-design/icons'



import './PhoneNavbar.css'



import logo from '../../img/logo.svg'
import MoreIcons from '../MoreIcons/MoreIcons'
import HumbergerMenu from '../HumbergerMenu/HumbergerMenu'



const PhoneNavbar = () => {
  return (
    <nav className='navbar'>

        <div className='navbar-container'>

            <ul className='navbar-nav-left'>
            <HumbergerMenu/>
            </ul>

            <div className='navbar-brand'>
                <img src={logo}/>
            </div>

            

            <ul className='navbar-nav-right'>
              <li><MoreIcons/></li>
            </ul>
        </div>
    </nav>
  )
}

export default PhoneNavbar