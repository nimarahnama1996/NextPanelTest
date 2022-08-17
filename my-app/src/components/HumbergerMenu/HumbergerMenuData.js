import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';
import * as BsIcons from 'react-icons/bs';


import lanchers from '../../img/lanchers.svg'
import overview from '../../img/overview.svg'
import notification from '../../img/notification.svg'
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

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'Filimo1',
          path: '/contents/Filimo1',
        },
        {
          title: 'Filimo2',
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

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

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