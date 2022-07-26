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
 background: linear-gradient(180deg,  #141414, #000000 100% 100%);
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
      <IconContext.Provider value={{ color: '#fff' , }}>
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
            {HumbergerMenuData.map((item,index) => {
              return <HumMenu item={item} key={index} />;
            })}
          </SidebarWrap>
         
       
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default HumbergerMenu;