import React from 'react'

function Rating(props) {
  return (
    <div>
         

          <div className="rating">
           
              <div className='rating-sub11'>
                  <img className="img1" src="src\assets\img\destination.png" alt="" />
                  <h2>Ratings</h2>
              </div>
                    <div className="rating-sub12">
                      <div className="rating1-sub12">
                            <div className="rating-img-div">
                              <img className='rating-img' src="src\assets\img\paris.jpg" alt="" />
                            </div>
                            <div className="rating-info">
                                <h3>Paris,France</h3>
                                <p>{props.name1}, ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus animi veniam provident delectus reprehenderit vero quam laborum officiis perspiciatis, numquam fugiat eius minima non explicabo? Consectetur earum aspernatur ut, necessitatibus officia aut dolorum error cupiditate deserunt impedit eveniet vel ea nulla, quam, quis animi illo. Necessitatibus ut quas recusandae.</p>
                                 <img className='rating-img2' src="src\assets\img\rating2.png" alt="" />
                                 
                            </div>
                      </div>


                           <div className="rating1-sub12">
                            <div className="rating-img-div">
                              <img className='rating-img' src="src\assets\img\bali.jpg" alt="" />
                            </div>
                            <div className="rating-info">
                                <h3>Bali, Indonesia</h3>
                                <p>{props.name2}, ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus animi veniam provident delectus reprehenderit vero quam laborum officiis perspiciatis, numquam fugiat eius minima non explicabo? Consectetur earum aspernatur ut, necessitatibus officia aut dolorum error cupiditate deserunt impedit eveniet vel ea nulla, quam, quis animi illo. Necessitatibus ut quas recusandae.</p>
                                 <img className='rating-img2' src="src\assets\img\rating1.png" alt="" />
                            </div>
                      </div>


                           <div className="rating1-sub12">
                            <div className="rating-img-div">
                              <img className='rating-img' src="src\assets\img\tokyo.jpg" alt="" />
                            </div>
                            <div className="rating-info">
                                <h3>Tokyo, Japan</h3>
                                <p>{props.name3}, ipsum dolor sit amet elit. Sunt temporibus animi veniam delectus reprehenderit vero quam laborum officiis perspiciatis, numquam fugiat eius minima non explicabo? Consectetur earum aspernatur ut, necessitatibus officia aut dolorum error cupiditate deserunt impedit eveniet vel ea nulla, quam, quis animi illo. Necessitatibus ut quas recusandae.</p>
                                 <img className='rating-img2' src="src\assets\img\rating2.png" alt="" />
                                 
                            </div>
                      </div>
                    
                    </div>
         </div>
    </div>
  )
}

export default Rating
