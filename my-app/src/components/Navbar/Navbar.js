import React from 'react'
import {MenuOutlined,MoreOutlined} from '@ant-design/icons'



import './Navbar.css'



import logo from '../../img/logo.svg'


const Navbar = () => {
  return (
    <nav className='navbar'>

        <div className='navbar-container'>

            <ul className='navbar-nav-left'>
              <li><MenuOutlined /></li>
            </ul>

            <div className='navbar-brand'>
                <img src={logo}/>
            </div>

            <ul className='navbar-nav-right'>
              <li><MoreOutlined /></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar