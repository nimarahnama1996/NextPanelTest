import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
   
  },

  {
    title: 'Notifications',
    path: '/notifications',
    icon: <AiIcons.AiOutlineBell/>,

  },

  {
    title: 'Contents',
    path: '/contents',
    icon: <AiIcons.AiOutlineEye/>,

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
    icon: <AiIcons.AiOutlineAppstore/>
  },

  {
    title: 'OTA Management',
    path: '/ota',
    icon: <BsIcons.BsCloudUpload/>
  },

  
  {
    title: 'Monitoring',
    path: '/monitoring',
    icon: <AiIcons.AiOutlineFundProjectionScreen />,

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