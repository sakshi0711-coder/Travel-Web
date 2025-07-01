import React from 'react'

function Values(props) {
  return (
    <div>
          <div className="values">
           
              <div className='values-sub11'>
                  <h2>Top values for you</h2>
                  <p className='value-p'>Try variety of benefits when using our services</p>
              </div>
                    <div className="values-sub12">
                      <div className="values1-sub12">
                            <div className="values-img-div">
                              <img className='values-img' src="src\assets\img\values1.png" alt="" />
                            </div>
                            <div className="values-info">
                                <h3>Airport pickup</h3>
                                <p>{props.name} ipsum adipisicing elit. A delectus atque harum quis.</p>
                            </div>
                      </div>


                           <div className="values1-sub12">
                            <div className="values-img-div">
                              <img className='values-img' src="src\assets\img\values2.png" alt="" />
                            </div>
                            <div className="values-info">
                                <h3>Easy booking</h3>
                                <p>{props.name1} ipsum dolor sit consectetu elit. Assumenda suscipit cum.</p>
                            </div>
                      </div>


                           <div className="values1-sub12">
                            <div className="values-img-div">
                              <img className='values-img' src="src\assets\img\values3.png" alt="" />
                            </div>
                            <div className="values-info">
                                <h3>Best tour guide</h3>
                                <p>{props.name2} ipsum dolor adipisicing elit. Placeat dolorum corporis.</p>
                            </div>
                      </div>



                       <div className="values1-sub12">
                            <div className="values-img-div">
                              <img className='values-img' src="src\assets\img\values4.jpg" alt="" />
                            </div>
                            <div className="values-info">
                                <h3>Lots of promos</h3>
                                <p>{props.name3} ipsum dolor sit, adipisicing elit. fugit dolorum corporis.</p>
                            </div>
                      </div>
                    
                    </div>
         </div>



 
    </div>
  )
}

export default Values
