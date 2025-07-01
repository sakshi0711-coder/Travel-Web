import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import TravelDestination from './Component/travelDestination'
import Rating from './Component/Rating'
import Form from './Component/Form'
import Values from './Component/Values'
import Explore from './Component/Explore'
import Counter from './Component/Counter'

function App() {


  return (
    <div className='app'>
      <Navbar text="Travel with Us"/>
      <Hero name="Sea views"/>
      <Values name="props" name1="props" name2="props" name3="props"/>
      <TravelDestination/>
      <Explore/>
      <Rating  name1="props" name2="props" name3="props"/>
      {/* <Counter name="Increment"/> */}
      <Form/>
    </div>
    
  )
}

export default App
