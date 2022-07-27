import React,{useState} from 'react'
import {CloseOutlined,MenuOutlined} from '@ant-design/icons'



import './HumbergerMenu.css'







const HumbergerMenu = () => {

    
    const [active,setActive] = useState(false)
   
    const showMenu = () => {
        setActive(!active)
    }

  

  return (
    <div>

     <div>
        
        <MenuOutlined  className='navbar-burger-menu'  onClick={showMenu}/>
     </div>
     <div className={active ? 'slider active' :  'slider'}>

        <div>
            <CloseOutlined  className='navbar-close-btn' onClick={showMenu}/>
        </div>

       
        </div>

    
    </div>
  )
}


export default HumbergerMenu