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




/*


 <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <a href="#">
                <img src={overview} alt="overview"/>
                  <span> Overview</span>
                </a>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a href="#">
                 <img src={notification} alt='notification'/>
                  <span> Notification</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="#">
                <img src={contents} alt='contents'/>
                  <span> Contents</span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="#">
                <img src={lanchers} alt='launchers'/>
                  <span>Launchers</span>
                </a>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="#">
                <img src={ota} alt='ota'/>
                  <span>OTA Management</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="#">
                <img src={monitoring} alt='monitoring'/>
                  <span>Monitoring</span>
                </a>
              </li>
            </ul>
          </div>

*/