import React from 'react'
import { Route, Routes } from 'react-router-dom';



import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Notifications from './pages/Notifications/Notifications';
import BreadCrumbText from './components/BreadCrumbText/BreadCrumbText';



const App = () => {
  return (
    <div>
   
   <header>
   <Navbar/>
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