import React from 'react'
import { Route, Routes } from 'react-router-dom';




import Home from './pages/Home/Home';
import Notifications from './pages/Notifications/Notifications';
import BreadCrumbText from './components/BreadCrumbText/BreadCrumbText';
import PhoneNavbar from './components/PhoneNavbar/PhoneNavbar';
import MainIcons from './components/MainIcons/MainIcons';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';


const App = () => {
  return (
    <div>

   
   
   <header>
   <PhoneNavbar/>
   <MainIcons/>
   </header>

   
   

   <div>
    <BreadCrumbText/>
   </div>



   

   <main>
       <Routes>
        <Route index path='' element={<Home/>}/>

        <Route path='notifications' element={<Notifications/>}/>
      </Routes>
   </main>



   


   
    </div>
  )
}

export default App