import React,{useState} from 'react'
import Hamburger from 'hamburger-react'



import './BurgerMenu.css'


const BurgerMenu = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className={!isOpen ?   '' : 'slider active'}>
    <Hamburger   size={14} toggled={isOpen} toggle={setOpen} />
    </div>
  )
}

export default BurgerMenu