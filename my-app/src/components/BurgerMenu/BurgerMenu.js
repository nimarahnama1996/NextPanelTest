import React,{useState} from 'react'
import {MenuOutlined,CloseOutlined} from '@ant-design/icons'



import './BurgerMenu.css'



const BurgerMenu = () => {

    const [active,setActive] = useState(false)


    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className='header'>

     <div className='menu-icon'>
        <MenuOutlined className='menu'  onClick={showMenu}/>
     </div>
     <nav className={active ? 'slider active' :  'slider'}>
        <ul>

        <div className='closed'>
            <CloseOutlined className='close' onClick={showMenu}/>
        </div>
      
        </ul>
     </nav>
    </div>
  )
}

export default BurgerMenu