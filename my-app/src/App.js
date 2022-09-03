import React from 'react'
import { Route, Routes } from 'react-router-dom';




import Home from './pages/Home/Home';
import Notifications from './pages/Notifications/Notifications';
import BreadCrumbText from './components/BreadCrumbText/BreadCrumbText';
import PhoneNavbar from './components/PhoneNavbar/PhoneNavbar';
import MainIcons from './components/MainIcons/MainIcons';
import './App.css'

const App = () => {
  return (
    <div>

   

   
   
   <header className='main-app'>
   <PhoneNavbar/>
   <MainIcons/>
   </header>

   
   

   <div>
    <BreadCrumbText/>
   </div>

   <div>
    <Home/>
   </div>



   

   <main >
       <Routes>

        <Route path='notifications' element={<Notifications/>}/>
      </Routes>
   </main>



   


   
    </div>
  )
}

export default App