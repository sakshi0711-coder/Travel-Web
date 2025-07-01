import React from 'react'

function Hero(props) {
  return (
    <div>
        <div className="hero">
           <div className="hero1">
              <div className='hero-sub11'>
                  <img className="img1" src="src\assets\img\places.jpg" alt="" />
                  <h2>Discover Amazing places </h2>
              </div>
              <div className="hero-sub12">
                <div className="hero-sub12-video">
                    <video className='video' autoPlay loop muted src="src\assets\video\travel.mp4"></video>
                </div>
              </div>
              <div className="hero-sub13">
                <h3>Looking for adventure? Whether it's "tropical beaches","historical cities", 
                  or "{props.name}", we have it all. Traveling
                   opens doors to new cuitures, experiences and unforgettable memories.</h3>
              </div>
           </div>
      </div>


    </div>
  )
}

export default Hero
