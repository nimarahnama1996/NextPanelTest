import React from 'react'
import {MenuOutlined,MoreOutlined} from '@ant-design/icons'



import './Navbar.css'



import logo from '../../img/logo.svg'
import MoreIcons from '../MoreIcons/MoreIcons'
import HumbergerMenu from '../HumbergerMenu/HumbergerMenu'
import Sidebar from '../SidebarMenu/Sidebar'

const Navbar = () => {
  return (
    <nav className='navbar'>

        <div className='navbar-container'>

            <ul className='navbar-nav-left'>
            <Sidebar/>
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

export default Navbar