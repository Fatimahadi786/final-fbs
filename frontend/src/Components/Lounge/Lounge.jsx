import React from 'react'
import './Lounge.scss'
//impored images ===========================>
import imageGrid from'../Images/image-Grid2.jpg'

const Lounge = () => {
  return (
    <div className='lounge container section'>
    <div className="sectionContainer grid">
      <div className="imgDiv">
        <img src={imageGrid}  className='' alt="view" />
      </div> 
      <div className="textDiv">
        <h2>Unsccompainied Minor Lounge</h2>
        <div className="grids grid">
        <div className="singleGrid">
          <span className='gridTitle'>
          Help through the airport
          </span>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>

        <div className="singleGrid">
          <span className='gridTitle'>
          Priority Boarding
          </span>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>
        <div className="singleGrid">
          <span className='gridTitle'>
          Care On The Flight
          </span>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>
        <div className="singleGrid">
          <span className='gridTitle'>
          Chauffeur-drive Service
          </span>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>
        
      </div>
        </div>
      

    </div>
    </div>
  )
}

export default Lounge
