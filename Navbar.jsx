import React, { useState } from 'react'

function Navbar(props) {
    
  
      const [name,setMode]=useState(document.name="Dark Mode")
      
    const myFunc =(e) =>{

      const nbtn =e.target;
      const hero = document.querySelector('.hero')
      const hero1 = document.querySelector('.hero-sub12-video')
      const navbar = document.querySelector('.navbar')
      const navbar2 = document.querySelector('.navbar2')
      const navbar1 = document.querySelector('.navbar1')
      const values = document.querySelector('.values')
      const travelDestination = document.querySelector('.Travel-Destination')
      const travelDestination1 = document.querySelectorAll('.Travel-Destination1-sub12')
      const travelDestination2 = document.querySelectorAll('.Travel-img-div')
      const explore = document.querySelector('.explore')
      const ratings = document.querySelector('.rating')
      const ratings1 = document.querySelectorAll('.rating1-sub12')
      const ratings2 = document.querySelectorAll('.rating-img-div')

      const form = document.querySelector('.form-sub1')
    
      setMode(
          document.body.style.backgroundColor=="white"
          ?
          (document.body.style.backgroundColor="black",
            hero.style.backgroundColor=" rgb(151, 202, 250)",
            hero.style.color="black",
            hero1.style.border="1px solid black",
            navbar.style.backgroundColor=" rgb(151, 202, 250)",
            navbar.style.color="black",
            navbar1.style.backgroundColor=" rgb(151, 202, 250)",
            navbar1.style.color="black",
            navbar2.style.color="white",
            values.style.backgroundColor=" rgb(151, 202, 250)",
            values.style.color="black",
            travelDestination.style.backgroundColor=" rgb(151, 202, 250)",
            travelDestination.style.color="black",
            explore.style.backgroundColor=" rgb(151, 202, 250)",
            explore.style.color="black",
            ratings.style.backgroundColor=" rgb(151, 202, 250)",
            ratings.style.color="black",
            form.style.backgroundColor=" rgb(151, 202, 250)",
            form.style.color="black",
            nbtn.innerText="Light mode",
            nbtn.style.color="white",
            
            travelDestination1.forEach((ele)=>{
              ele.style.border = "1px solid black";
            }),
            travelDestination2.forEach((ele)=>{
              ele.style.border = "1px solid black";
            }),
            ratings1.forEach((ele)=>{
              ele.style.border = "1px solid black";
            }), ratings2.forEach((ele)=>{
              ele.style.border = "1px solid black";
            })
          )
          :
          (document.body.style.backgroundColor="white",nbtn.innerText="Dark mode",
            hero.style.backgroundColor=" rgb(1, 20, 38)",
            hero1.style.border="1px solid white",
            hero.style.color="white",
            navbar.style.backgroundColor=" rgb(1, 20, 38)",
            navbar.style.color="white",
            navbar1.style.backgroundColor=" rgb(1, 20, 38)",
            navbar1.style.color="white",
            values.style.backgroundColor=" rgb(1, 20, 38)",
            values.style.color="white",
            travelDestination.style.backgroundColor=" rgb(1, 20, 38)",
            travelDestination.style.color="white",
            explore.style.backgroundColor=" rgb(1, 20, 38)",
            explore.style.color="white",
            ratings.style.backgroundColor=" rgb(1, 20, 38)",
            ratings.style.color="white",
            form.style.backgroundColor=" rgb(1, 20, 38)",
            form.style.color="white",
            nbtn.style.color="black",
            navbar2.style.color="black",
              
            travelDestination1.forEach((ele)=>{
              ele.style.border = "1px solid white";
            }),
            travelDestination2.forEach((ele)=>{
              ele.style.border = "1px solid white";
            }),
            ratings1.forEach((ele)=>{
              ele.style.border = "1px solid white";
            }), ratings2.forEach((ele)=>{
              ele.style.border = "1px solid white";
            })
          


          )
      )
    }

  return (
    <div className="main">
      <div className="navbar">
          <div className="navbar1">
             <div className='navbar-sub11'>
                <img className="img1" src="src/assets/img/navbar1.jpg" alt="" />
                <h2>{props.text} </h2>
            </div>
            <div className="navbar-sub12">
              <h3>Explore the world's most breathtaking destinations.</h3>
            </div>
          </div>
      </div>
      <div className="navbar2">
        <h3 className='navbar-btn button'>Home</h3>
        <h3>|</h3>
        <h3 className='navbar-btn button'>Destination</h3>
        <h3>|</h3>
        <h3 className='navbar-btn button'>Travel Tips</h3>
        <h3>|</h3>
        <h3 className='navbar-btn button'>Reviews</h3>
        <h3>|</h3>
        <h3 className='navbar-btn button'>Book Now</h3>
        <h3>|</h3>
        <h3 className='navbar-btn button'>Sign Up</h3>
        <h3>|</h3>
        <h3 className='navbar-btn button'><button type="button" className='nbtn button' onClick={myFunc}>{name}</button></h3>
      </div>










    </div>



  )
}

export default Navbar
