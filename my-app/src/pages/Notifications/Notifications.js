import React from 'react'

const Notifications = () => {
  return (
    <div>Notifications</div>
  )
}

export default Notifications






/*

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {  HumbergerMenuData} from './HumbergerMenuData';
import HumMenu from './HumMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
 
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
 
  margin-left:12px;
  font-size: 14px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (min-width: 630px){
        display: none;
   }
   
   
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 210px;
  height: 1000vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  height: 100vh;
  overflow: scroll;
 

  @media only screen and (min-width: 630px){
    left: ${({ sidebar }) => (sidebar ? '-100%' : '0')};
    
    position: fixed;
    margin-top:192px;
    overflow: auto;
    height: 100vh;
    overflow: scroll;
   }

   @media only screen and (min-width: 1024px){
    left: ${({ sidebar }) => (sidebar ? '-100%' : '0')};
   
    margin-top:192px;
    overflow: auto;
    height: 100vh;
   
   }

`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const HumbergerMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
       
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
       
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {HumbergerMenuData.map((item, index) => {
              return <HumMenu item={item} key={index} />;
            })}
          </SidebarWrap>
          
       
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default HumbergerMenu;



*/



/*


import React from 'react';



import {IoIosArrowDown,IoIosArrowUp}  from "react-icons/io";


import lanchers from '../../img/lanchers.svg'
import overview from '../../img/overview.svg'
import notification from '../../img/menu-notification-icon.svg'
import contents from '../../img/contents.svg'
import ota from '../../img/ota.svg'
import monitoring from '../../img/monitoring.svg'



export const HumbergerMenuData = [
  {
    title: 'Overview',
    path: '/',
    icon: <img src={overview} alt='overview'/>
   
  },


  {
    title: 'Notifications',
    path: '/notifications',
    icon: <img src={notification} alt='notification'/>,

  },

  {
    title: 'Contents',
    path: '/contents',
    icon: <img src={contents} alt='contents'/>,

    iconClosed: <IoIosArrowDown   />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
        {
          title: 'Filimo(Selection) ',
          path: '/contents/Filimo1',
        },
        {
          title: 'Filimo(Statistic)',
          path: '/contents/Filimo2',
       
        },
        {
            title: 'TSCOBOX',
            path: '/contents/tscobox',
         
          }
      ]
  },


  {
    title: 'Launchers',
    path: '/launchers',
    icon: <img src={lanchers} alt='lanchers'/>
  },

  {
    title: 'OTA Management',
    path: '/ota',
    icon: <img src={ota} alt='ota'/>,
  },

  
  {
    title: 'Monitoring',
    path: '/monitoring',
    icon: <img src={monitoring} alt='monitoring'/>,

    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: 'Users',
        path: '/monitoring/users',
       
      },
      {
        title: 'servers',
        path: '/monitoring/servers',
        
      },
      {
        title: 'Products',
        path: '/monitoring/products',
        
      }
    ]
  },
];


*/




/*


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './HumbergerMenu.css'

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 12px;
  margin-left:8px;
  
  
  &:hover {
    background: #7C7B7B;
    color:#fff;
    cursor: pointer;
    border-radius:3px;
  }

  &:hover{
      img{
      background: #ABABAB;
      border-radius:30px;
      padding:12px 6px;
      margin-left:-10px
      
    }
      
  }

 

 
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  
`;


const IconLabel = styled.span`
    
    
`;



const DropdownLink = styled(Link)`
  background: #151515;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 12px;
  
  &:hover {
    background: #7C7B7B;
    color:#fff;
    cursor: pointer;
    border-radius:3px;
    font-size: 15px;
  }

  
  

 


`;





const HumMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
    <div className='all-item'>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
        <IconLabel>{item.icon}</IconLabel>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      </div>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
        
            <IconLabel >{item.icon}</IconLabel>
              
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default HumMenu;



*/