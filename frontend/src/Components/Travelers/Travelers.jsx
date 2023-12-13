import React from 'react'
import './Travelers.scss'
//imported destination images===================>
import paris from '../Images/Paris.png';
import Dubia from '../Images/Dubia.jpg';
import London from '../Images/London.png';
import Iran from '../Images/Iran.jpg';


//imported travelers images===================>
import traveler1 from '../Images/traveler1.jpg';
import traveler2 from '../Images/traveler2.jpg';
import traveler3 from '../Images/traveler3.png';
import traveler4 from '../Images/traveler4.jpg';


//we are going to use high order array method called to map to display all the data===============>
const travelers =[
  {
    id:1,
    destinationImage: paris,
    travelerImage:traveler1,
    travelerName:'FatimaHadi',
    socialLink:'@FatimaHadi8'


    
  },
  {
    id:2,
    destinationImage: Dubia,
    travelerImage:traveler2,
    travelerName:'M Hadi',
    socialLink:'@M Hadi8'


    
  },
  {
    id:3,
    destinationImage: London,
    travelerImage:traveler3,
    travelerName:'Amir Abbas',
    socialLink:'@M Hadi8'


    
  },
  {
    id:4,
    destinationImage:Iran,
    travelerImage:traveler4,
    travelerName:'Abdullah',
    socialLink:'@Abdullah'


    
  }
  
]


const Travelers = () => {
  return (
    <div className='travelers container section'>
    <div className="sectionContainer">
      <h2>Top travelers of this month!</h2>
      <div className="travelersContainer grid">
     
        {
          travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
            return(
             //  {/* single passenger card */}
              <div key={id} className="singleTraveler">
          <img src={destinationImage} className='destinationImage' alt="view" />
          <div className="travelerDetials">
            <div className="travelerPicture">
              <img src={travelerImage} className='travelerImage' alt="view" />

            </div>
            <div className="travelerName">
              <span>{travelerName}</span>
              <p>{socialLink}</p>
            </div>
          </div>
        </div>
            )
          })
        }
      </div>
    </div>
      
    </div>
  )
}

export default Travelers
