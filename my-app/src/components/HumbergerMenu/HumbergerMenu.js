import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {CloseOutlined,MenuOutlined,EyeOutlined} from '@ant-design/icons'
import { Menu } from 'antd'



import './HumbergerMenu.css'



import overviewIcon from '../../img/overview.svg'
import notificationIcon from '../../img/notification.svg'
import lancherIcon from '../../img/lanchers.svg'
import otaIcon from '../../img/ota.svg'
import monitoringIcon from '../../img/monitoring.svg'




const { SubMenu } = Menu;



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

        <div>
        <Menu
        
        style={{ 
            width:'191px',
            backgroundColor:'#171717',
            color:'#ffffff',
           marginTop:'30px'
             }}
        theme='dark'
        
      >
        
          <Menu.Item key="1" className='sidebar-overview-icon'>
          <img src={overviewIcon} alt='overview'/>
          <Link to='/'>Overview</Link>
          </Menu.Item>

          <Menu.Item key="2" className='sidebar-notification-icon'>
          <img src={notificationIcon} alt='notification'/>
          <Link to='/notifications'>
                Notifications
            </Link>
          </Menu.Item>


          
          <SubMenu key="3" title="Contents"   icon={<EyeOutlined/>} >
      
        
            <Menu.Item key="4">Filimo </Menu.Item>
            <Menu.Item key="5">Filimo </Menu.Item>
            <Menu.Item key="6">TSCOBOX</Menu.Item>  
        </SubMenu>

        <Menu.Item key="7" >
           <img src={lancherIcon} alt='lancher'/>
           <Link to='/launchers'>
            Launchers
            </Link>
          </Menu.Item>

          <Menu.Item key="8">
          <img  src={otaIcon} alt='ota'/>
          <Link to='/ota'>
            OTA Management
            </Link>
          </Menu.Item>

          <img  src={monitoringIcon} alt='monitoring'/>
        <SubMenu key="9" title="Monitoring" >
       
          <Menu.Item key="10">Users</Menu.Item>
          <Menu.Item key="11">Servers</Menu.Item>
          <Menu.Item key="12">Products</Menu.Item>
        </SubMenu>
      </Menu>
        </div>

        <div className='sidebar-menu-text'></div>

       
        </div>

    
    </div>
  )
}


export default HumbergerMenu