import React from 'react'
import MostPopular from '../MostPopular/MostPopular'
import './Home.css'
const Home = () => {
  return (
    <div className="main">
        <div className="cont">

            <div className="words">
                <h1>Tail Fishing Reel</h1>
                <button className='shopbtn'>Shop Now 🡢</button>
            </div>
          
            <div className="cont2">
                <div className="img1">
                
                </div>
            </div>  
        </div>
        <MostPopular />
    </div>
  )
}

export default Home