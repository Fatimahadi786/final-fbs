import React, {useState} from 'react'
import { Link } from 'react-router-dom'; // Import Link from React Router
import Home from '../Home/Home'

import '../../main.scss'
import './Navbar.scss'

//IMPORTED ASSERTS -=============>
import LOGO from '../../Components/Images/LOGO2.png'


//IMPORTED REACT ICONS==================>
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'


const Navbar = () => {
const [active , setActive] = useState ('navBar')
//Function to toggle navbar=====>
const showNav = () =>{
  setActive('navBar activeNavbar')
}
//Function to removenavbar=====>
const removeNavbar = () =>{
  setActive('navBar')
}
  
  return (
   <>
     <section className='navBarSection'>
    <header className="header flex">
      <div className="logoDiv">
        <img src={LOGO} alt="LOGO" className='logo' />
      </div>
      <div className={active}>
      <ul className="navLists flex">
      <li className="navItem">
        <Link to="/" className="navlink">Home</Link>
      </li>

      <li className="navItem">
        <Link to="/about" className="navlink">About</Link>
      </li>
        
      <li className="navItem">
        <Link to="/booking" className="navlink">Booking</Link>
      </li>   
      <li className="navItem">
        <Link to="/contact" className="navlink">Contact</Link>
      </li>
{/*       
      <div className='headerBtns flex'>
        <button className='btn loginBtn'>
          <Link to="/login">Login</Link>
        </button> 
        <button className='btn'>
          <Link to="/signUp">SignUp</Link>
        </button>
      </div> */}
    </ul>
        <div  onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseCircle className='icon' />
        </div>
      </div>
      <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className='icon' />
      </div>
    </header>

    </section>
    <Home/>
   </>
  )
}

export default Navbar
