import React,{useState} from 'react'
import Hamburger from 'hamburger-react'


import './BurgerMenuTest.css'


const BurgerMenuTest = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className={!isOpen ?   '' : 'slider active'}>
    <Hamburger   size={14} toggled={isOpen} toggle={setOpen} />
    </div>
  )
}

export default BurgerMenuTest