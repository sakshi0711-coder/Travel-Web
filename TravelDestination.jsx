import React from 'react'

function TravelDestination() {
  return (
    <div>
         
       <div className="Travel-Destination">
           
              <div className='Travel-Destination-sub11'>
                  <img className="img1" src="src\assets\img\destination.png" alt="" />
                  <h2>Top Travel Destination</h2>
              </div>
                    <div className="Travel-Destination-sub12">
                      <div className="Travel-Destination1-sub12">
                            <div className="Travel-img-div">
                              <img className='Travel-img' src="src\assets\img\paris.jpg" alt="" />
                              <video className='travel-video' autoPlay muted loop src="src\assets\video\destination2.mp4"></video>
                            </div>
                            <div className="Travel-Destination-info">
                                <h3>Paris,France</h3>
                                <p>City of love,art, and history. Visit the 'Eiffel Tower,
                                  Louvre Museum', and taste world-class culsine.</p>
                            </div>
                      </div>


                           <div className="Travel-Destination1-sub12">
                            <div className="Travel-img-div">
                              <img className='Travel-img' src="src\assets\img\bali.jpg" alt="" />
                              <video className='travel-video' autoPlay muted loop src="src\assets\video\destination1.mp4"></video>
                              
                            </div>
                            <div className="Travel-Destination-info">
                                <h3>Bali, Indonesia</h3>
                                <p>Stunning beaches, peaceful temples, and breathtaking landscapes await you in Bali.</p>
                            </div>
                      </div>


                           <div className="Travel-Destination1-sub12">
                            <div className="Travel-img-div">
                              <img className='Travel-img' src="src\assets\img\tokyo.jpg" alt="" />
                              <video className='travel-video' autoPlay muted loop src="src\assets\video\destination2.mp4"></video>

                            </div>
                            <div className="Travel-Destination-info">
                                <h3>Tokyo, Japan</h3>
                                <p>Experiance the 'perfect blend of tradition and modern technology' in the heart of Japan.</p>
                            </div>
                      </div>
                    
                    </div>
         </div>



    </div>
  )
}

export default TravelDestination
