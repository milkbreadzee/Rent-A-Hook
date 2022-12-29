import React from 'react'
import {Link} from "react-router-dom"
import LatestPosts from '../LastestPosts/LatestPosts'
import MostPopular from '../MostPopular/MostPopular'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Home.css'
const Home = () => {
  return (
    <div className="main">
      <Header />
        <div className="cont">

            <div className="words">
                <h1>Tail Fishing Reel</h1>
                <Link to="/shop">
                <button className='shopbtn'>Shop Now 🡢</button>
                </Link>
                
            </div>
          
            <div className="cont2">
                <div className="img1">
                
                </div>
            </div>  
        </div>
        <MostPopular />
        <Footer />
    </div>
  )
}

export default Home