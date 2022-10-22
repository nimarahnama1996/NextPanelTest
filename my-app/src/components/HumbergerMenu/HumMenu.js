
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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

