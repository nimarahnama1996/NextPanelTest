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