import React,{useState} from 'react'
import '../../main.scss'
import './home.scss'

//imported Icons ===============>
import {HiOutlineLocationMarker } from 'react-icons/hi';
import {RiAccountPinCircleLine } from 'react-icons/ri';
import {RxCalendar} from 'react-icons/rx';
// import Search from '../Search/Search';
import Travelers from '../Travelers/Travelers';
import Info from '../Info/Info'
import Lounge from '../Lounge/Lounge'
import Support from '../Support/Support'
import Subscribers from '../Subscribers/Subscribers'
import Footer from '../Footer/Footer'
import LinearStepper from '../FlightBooking/LinearStepper/LinearStepper';
const Home = () => {
     
 

  return (
   <>
     <section className="home">
        <div className="secContainer container">
            <div className="homeText">
                <h1 className='title'>
                  <b>  YOUR SATISFACTION IS OUR ACHIEVEMENT</b>
                </h1>
                <p className='subTitle'>
                    <strong>Travel to your favourite countries & cities with respectful of the environment</strong>
                </p>

                <button className='btn'>
                <a href="#">Explore Now</a>
                </button>
            </div>     
        </div>
    </section>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Support/>
    <Travelers/>
    <Info/>
    <Lounge/>
    <Subscribers/>
    <Footer/>
   
   </>
  )
}

export default Home